import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

import Page from "@/components/storyblok/Page";
import Teaser from "@/components/storyblok/Teaser";
import Grid from "@/components/storyblok/Grid";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
  },
});
