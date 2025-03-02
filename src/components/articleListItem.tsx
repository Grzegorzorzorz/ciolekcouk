import React from "react";

interface ArticleListItemProps {
  title: string;
  date: string;
  to: string;
  children: React.ReactNode;
}

export default function ArticleListItem({
  title,
  date,
  to,
  children,
}: ArticleListItemProps) {
  return (
    <li className="list-row">
      <a href={`/articles/${to}`}>
        <div>
          <div className="text-xl font-bold">{title}</div>
          <div className="text-xs uppercase font-bold opacity-60">{date}</div>
        </div>
        <div className="list-col-wrap text-sm opacity-80">{children}</div>
      </a>
    </li>
  );
}
