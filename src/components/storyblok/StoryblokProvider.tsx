"use client";

import React from "react";

import { getStoryblokApi } from "@/lib/storyblok";

interface StoryblokProviderProps {
  children: React.ReactNode;
}

export default function StoryblokProvider({
  children,
}: StoryblokProviderProps) {
  getStoryblokApi();
  return children;
}
