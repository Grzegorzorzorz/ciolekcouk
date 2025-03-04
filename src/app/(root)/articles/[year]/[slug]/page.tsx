import Prose from "@/components/prose";
import { getStoryblokApi, getStoryProp } from "@/lib/storyblok";
import { ISbError, StoryblokStory } from "@storyblok/react/rsc";
import { Metadata } from "next";
import { notFound } from "next/navigation";

async function fetchArticle(year: string, slug: string) {
  let version: "published" | "draft" | undefined = undefined;
  switch (process.env.STORYBLOK_VERSION) {
    case "published":
    case "draft":
      version = process.env.STORYBLOK_VERSION;
  }

  const storyblockApi = getStoryblokApi();
  try {
    const response = await storyblockApi.getStory(`articles/${year}/${slug}`, {
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
        console.debug(`for resource: articles/${year}/${slug}`);
    }
    notFound();
  }
}

export default async function Article(props: any) {
  const params = await props.params;
  const story = await fetchArticle(params.year, params.slug);
  return (
    <article>
      <ul className="text-sm opacity-65 m-0 list-none p-0">
        <li>Published: {`${story.sort_by_date}`}</li>
      </ul>
      <Prose>
        <h1>{story.name}</h1>
        <StoryblokStory story={story} />
      </Prose>
    </article>
  );
}

export async function generateMetadata(props: any): Promise<Metadata> {
  const params = await props.params;
  const title = await getStoryProp(
    "name",
    `articles/${params.year}/${params.slug}`,
  );

  return {
    title: title ? title : "Article",
  };
}
