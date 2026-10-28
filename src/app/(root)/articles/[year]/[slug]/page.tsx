import Prose from "@/components/prose";
import { titleSuffix } from "@/lib/const";
import { fetchStory } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    year: string;
    slug: string;
  }>;
}

export default async function Article(props: PageProps) {
  const { year, slug } = await props.params;
  const story = await fetchStory(`/articles/${year}/${slug}`);
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

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { year, slug } = await props.params;
  const story = await fetchStory(`/articles/${year}/${slug}`);

  return {
    title: `${story.name ?? "Article"} ${titleSuffix}`,
    description: story.content.summary
      ? story.content.summary
      : "The article description could not be fetched. Please try again later.",
  };
}
