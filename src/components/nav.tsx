import React from "react";

import HomeIcon from "@/icons/faSolidHouse.svg";
import ContactIcon from "@/icons/faSolidPenNib.svg";
import ArticlesIcon from "@/icons/faSolidNewspaper.svg";
import ProjectsIcon from "@/icons/faSolidPenRuler.svg";
import GitHubIcon from "@/icons/faSolidGithub.svg";
import LinkedInIcon from "@/icons/faSolidLinkedin.svg";

import NavLink from "@/components/client/navLink";

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
