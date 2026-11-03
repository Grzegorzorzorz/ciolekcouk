import type { Metadata } from "next";

import { titleSuffix } from "@/lib/const";

import { fetchStory } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

export const metadata: Metadata = {
  title: `Home ${titleSuffix}`,
  description:
    "Learn about Grzegorz Ciołek, a Computer Science student at Aberystwyth " +
    "University. Find out more about his projects, hobbies, and interests.",
};

export default async function Landing() {
  const story = await fetchStory("/landing");
  return <StoryblokStory story={story} />;
}
