import Prose from "@/components/prose";
import { titleSuffix } from "@/lib/const";
import { getStoryblokApi, getStoryProp } from "@/lib/storyblok";
import { ISbError, ISbStoryData, StoryblokStory } from "@storyblok/react/rsc";
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

let storyPromise: Promise<any>;

export default async function Article(props: any) {
  const params = await props.params;
  storyPromise = fetchArticle(params.year, params.slug);
  const story = await storyPromise;
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
  let story = await storyPromise;
  console.log(JSON.stringify(story, null, 2));

  return {
    title: `${story.name ? story.name : "Article"} ${titleSuffix}`,
    description: story.content.summary
      ? story.content.summary
      : "The article description could not be fetched. Please try again later.",
  };
}
