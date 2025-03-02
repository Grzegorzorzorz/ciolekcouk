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
  title: string;
  date: string;
  description: string;
  href: string;
}

async function fetchArticles(): Promise<Article[]> {
  if (process.env.DATABASE_URL === undefined) {
    throw new Error("Database URL not defined");
  }

  const sql = postgres(process.env.DATABASE_URL, { ssl: "verify-full" });
  const articles = await sql<Article[]>`
		SELECT id, title, date, description, href
		FROM articles
		ORDER BY date DESC;
	`;

  return articles;
}

async function generateArticles() {
  try {
    const articles = await fetchArticles();

    await new Promise((r) => setTimeout(r, 2000));

    return articles.map((article) => (
      <ArticleListItem
        key={article.id}
        title={article.title}
        date={article.date}
        to={article.href}
      >
        {article.description}
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
