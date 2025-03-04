import "./tailwind.css";
import React from "react";
import { Metadata } from "next";

import StoryblokProvider from "@/components/storyblok/StoryblokProvider";

export const metadata: Metadata = {
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "48x48",
      url: "/favicon/favicon-48x48.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "167x167",
      url: "/favicon/favicon-167x167.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/favicon-180x180.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/favicon/favicon-192x192.png",
    },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoryblokProvider>
  );
}
