import { getStoryblokApi, getStoryProp } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { Metadata } from "next";

async function fetchArticle(year: string, slug: string) {
  let version: "published" | "draft" | undefined = undefined;
  switch (process.env.STORYBLOK_VERSION) {
    case "published":
    case "draft":
      version = process.env.STORYBLOK_VERSION;
  }

  const storyblockApi = getStoryblokApi();
  const response = await storyblockApi.getStory(`articles/${year}/${slug}`, {
    version: version,
  });

  return response.data.story;
}

export default async function Article(props: any) {
  const params = await props.params;
  const story = await fetchArticle(params.year, params.slug);
  return <StoryblokStory story={story} />;
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
