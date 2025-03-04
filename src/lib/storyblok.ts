import Article from "@/components/storyblok/Article";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: {
    article: Article,
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
