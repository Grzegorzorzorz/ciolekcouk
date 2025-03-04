import React, { Suspense } from "react";
import type { Metadata } from "next";

import ArticleListItem from "@/components/articleListItem";
import List from "@/components/list";
import Prose from "@/components/prose";

import Loading from "./loading";
import { getStoryblokHeaders, storyblokGapiUrl } from "@/lib/storyblok";

export const dynamic = "force-dynamic";

interface Article {
  id: number;
  name: string;
  sort_by_date: string | null;
  full_slug: string;
  content: {
    summary: string;
  };
}

async function fetchArticles(): Promise<Article[]> {
  const url = storyblokGapiUrl;
  let headers = getStoryblokHeaders();

  const body = JSON.stringify({
    query: `
		{
			ArticleItems (sort_by: "sort_by_date:desc") {
				items {
					id
					name
					sort_by_date
					full_slug
					content {
						summary
					}
				}
			}
		}
		`,
  });

  const response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: body,
  });

  return (await response.json()).data.ArticleItems.items;
}

async function generateArticles() {
  try {
    const articles = await fetchArticles();

    return articles.map((article) => (
      <ArticleListItem
        key={article.id}
        title={article.name}
        date={article.sort_by_date}
        to={article.full_slug}
      >
        {article.content.summary}
      </ArticleListItem>
    ));
  } catch {
    return [
      <div key={0} className="text-center py-8">
        <Prose>
          <h2>Whoops!</h2>
          <p>Looks like we failed to connect to the articles database.</p>
          <p>Please try again later.</p>
          <p>Keeps happening?</p>
        </Prose>
        <a href="/contact/" className="btn btn-info mt-6">
          Let me know!
        </a>
      </div>,
    ];
  }
}

export const metadata: Metadata = {
  title: "Articles",
};

export default function Articles() {
  return (
    <>
      <Prose>
        <h1>Articles</h1>
        <p>
          These articles mostly fall into two categories: things I find cool or
          are working on, or issues I've run into on my system that I feel
          others could benefit from the solution to.
        </p>
        <p>If it falls into the latter category, follow at your own risk!</p>
      </Prose>
      <List className="mt-4">
        <Suspense fallback={<Loading />}>{generateArticles()}</Suspense>
      </List>
    </>
  );
}
