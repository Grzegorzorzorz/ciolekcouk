import React from "react";

import HomeIcon from "@/icons/faSolidHouse.svg";
import ContactIcon from "@/icons/faSolidPenNib.svg";
import ArticlesIcon from "@/icons/faSolidNewspaper.svg";
import ProjectsIcon from "@/icons/faSolidPenRuler.svg";
import GitHubIcon from "@/icons/faSolidGithub.svg";
import LinkedInIcon from "@/icons/faSolidLinkedin.svg";

import { headers } from "next/headers";

interface NavLinkProps {
  to: string;
  external?: boolean;
  children: React.ReactNode;
}

async function NavLink({ to, external, children }: NavLinkProps) {
  async function linkIsCurrent() {
    const header = await headers();
    const path = header.get("x-current-path");

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

  let isCurrent = await linkIsCurrent();
  const BASE_CLASSES = "flex flex-row justify-between";

  if (external !== true) {
    return (
      <li>
        <a
          className={BASE_CLASSES + (isCurrent ? " menu-active" : "")}
          href={to}
        >
          {children}
        </a>
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
export default function Nav() {
  const ICON_CLASSES = "h-3.5 w-3.5 opacity-85";
  return (
    <nav className="pt-2 pr-4 w-full print:hidden">
      <ul className="menu grz-menu-md w-full">
        <li>
          <h2 className="menu-title">ciolek.co.uk</h2>
          <ul>
            <NavLink to="/">
              Home
              <HomeIcon className={ICON_CLASSES} />
            </NavLink>
            <NavLink to="/contact">
              Contact
              <ContactIcon className={ICON_CLASSES} />
            </NavLink>
            <NavLink to="/articles">
              Articles
              <ArticlesIcon className={ICON_CLASSES} />
            </NavLink>
            <NavLink to="/projects">
              Projects
              <ProjectsIcon className={ICON_CLASSES} />
            </NavLink>
          </ul>
        </li>
        <li>
          <h2 className="menu-title">External</h2>
          <ul>
            <NavLink external to="https://github.com/Grzegorzorzorz">
              GitHub
              <GitHubIcon className={ICON_CLASSES} />
            </NavLink>
            <NavLink external to="https://www.linkedin.com/in/gciolek/">
              LinkedIn
              <LinkedInIcon className={ICON_CLASSES} />
            </NavLink>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
