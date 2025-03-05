import Link from "next/link";
import React from "react";

interface ArticleListItemProps {
  title: string;
  date: string | null;
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
      <Link href={`/${to}`}>
        <div>
          <div className="text-xl font-bold">{title}</div>
          <div className="text-xs uppercase font-bold opacity-60">
            {date ? date : "Undefined"}
          </div>
        </div>
        <div className="list-col-wrap text-sm opacity-80">{children}</div>
      </Link>
    </li>
  );
}

export function ArticleListItemSkele() {
  return (
    <div className="list-row">
      <div>
        <div className="skeleton max-w-full w-42 h-5"></div>
        <div className="skeleton max-w-full w-16 h-2 mt-2"></div>
      </div>
      <div className="skeleton list-col-wrap max-w-full w-3xl h-3"></div>
    </div>
  );
}
