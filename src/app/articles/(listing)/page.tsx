import React, { Suspense } from "react";
import type { Metadata } from "next";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

import postgres from "postgres";

import ArticleListItem from "@/components/articleListItem";
import List from "@/components/list";
import Prose from "@/components/prose";

import Loading from "./loading";

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
  const url = "https://gapi.storyblok.com/v1/api";
  let headers = new Headers();
  headers.set("token", `${process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN}`);
  headers.set("version", `${process.env.STORYBLOK_VERSION}`);
  headers.set("Content-Type", "application/json");
  console.log(headers);

  const body = JSON.stringify({
    query: `
		{
			ArticleItems {
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

  return (await response.json()).data.ArticleItems.items.sort(
    (a1: Article, a2: Article) => {
      if (a1.sort_by_date == null) {
        return 1;
      }

      if (a2.sort_by_date == null) {
        return 0;
      }

      if (a1.sort_by_date < a2.sort_by_date) {
        return 1;
      }

      if (a1.sort_by_date > a2.sort_by_date) {
        return -1;
      }

      return 0;
    },
  );
}

async function generateArticles() {
  try {
    const articles = await fetchArticles();

    await new Promise((r) => setTimeout(r, 2000));

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
