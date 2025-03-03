import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

async function fetchArticle(year: string, slug: string) {
  const storyblockApi = getStoryblokApi();
  const response = await storyblockApi.get(
    `cdn/stories/articles/${year}/${slug}`,
    {
      version: "draft",
    },
  );

  return response.data.story;
}

export default async function Article(props: any) {
  const params = await props.params;
  const story = await fetchArticle(params.year, params.slug);
  return <StoryblokStory story={story} />;
}
