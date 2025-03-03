"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import React from "react";

/** 2. Initialize it as usual */

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
});

interface StoryblokProviderProps {
  children: React.ReactNode;
}

export default function StoryblokProvider({
  children,
}: StoryblokProviderProps) {
  return children;
}
