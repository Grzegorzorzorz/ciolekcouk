import Article from "@/components/storyblok/Article";
import Page from "@/components/storyblok/Page";
import { apiPlugin, storyblokInit, ISbError } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: {
    article: Article,
    page: Page,
  },
});

export const storyblokGapiUrl = "https://gapi.storyblok.com/v1/api";

export function getStoryblokHeaders(): Headers {
  let headers = new Headers();
  headers.set("token", `${process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN}`);
  headers.set("version", `${process.env.STORYBLOK_VERSION}`);
  headers.set("Content-Type", "application/json");

  return headers;
}

export async function fetchStory(slug: string) {
  let version: "published" | "draft" | undefined = undefined;
  switch (process.env.STORYBLOK_VERSION) {
    case "published":
    case "draft":
      version = process.env.STORYBLOK_VERSION;
  }

  const storyblockApi = getStoryblokApi();
  try {
    const response = await storyblockApi.getStory(slug, {
      version: version,
    });
    return response.data.story;
  } catch (e) {
    const error = e as ISbError;
    switch (error.status) {
      case 401:
        break;
      case 404:
        notFound();
      default:
        console.error(`${error.status}: ${error.response}`);
        console.debug(`for resource: ${slug}`);
    }
    notFound();
  }
}

export async function getStoryProp(
  prop: "name",
  fullSlug: string,
): Promise<string | undefined> {
  try {
    const url = storyblokGapiUrl;
    let headers = getStoryblokHeaders();
    const body = JSON.stringify({
      query: `
			{
				ContentNodes (by_slugs: "${fullSlug}") {
					items {
						${prop}
					}
				}
			}
			`,
    });

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: body,
    });

    if (response.status != 200) {
      return undefined;
    }

    const responseJson = await response.json();

    return responseJson.data.ContentNodes.items[0].name;
  } catch {
    return undefined;
  }
}
