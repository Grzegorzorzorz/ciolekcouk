"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  to: string;
  external?: boolean;
  children: React.ReactNode;
}

export default function NavLink({ to, external, children }: NavLinkProps) {
  function linkIsCurrent() {
    const path = usePathname();

    if (path === null || path === undefined) {
      return false;
    }

    let isCurrent = false;
    if (path.slice(0, to.length) == to) {
      isCurrent = true;

      if (to == "/" && path.length > 1) {
        isCurrent = false;
      }
    }

    return isCurrent;
  }

  let isCurrent = linkIsCurrent();
  const BASE_CLASSES = "flex flex-row justify-between";

  if (external !== true) {
    return (
      <li>
        <Link
          className={BASE_CLASSES + (isCurrent ? " menu-active" : "")}
          href={to}
        >
          {children}
        </Link>
      </li>
    );
  } else {
    return (
      <li>
        <a
          className={BASE_CLASSES}
          target="_blank"
          rel="noopener noreferrer"
          href={to}
        >
          {children}
        </a>
      </li>
    );
  }
}
