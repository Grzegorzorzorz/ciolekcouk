import type { Metadata } from "next";

import LinkExtern from "@/components/linkExtern";
import Prose from "@/components/prose";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <Prose>
      <section>
        <h1>Projects</h1>
        <p>
          This page might not be fully up to date, so I recommend you also check
          my{" "}
          <LinkExtern href="https://github.com/Grzegorzorzorz">
            GitHub
          </LinkExtern>{" "}
          for a more current list!
        </p>
      </section>
      <section>
        <h2 id="ciolekcouk">
          <a href="#ciolekcouk">ciolek.co.uk</a>
        </h2>
        <p>
          I started this site to showcase my projects, and to post articles
          about stuff I either find interesting, or resources for future
          reference, such as fixing the{" "}
          <a href="/articles/hyprland-nvidia-prime-20240312">
            Nvidia issues I had on Hyprland
          </a>
          .
        </p>
        <p>
          It started off as a simple pure HTML/CSS project, though I later
          migrated it to use Express.js and tailwindcss to further my knowledge
          of JS and CSS frameworks, and to make maintenance easier.
        </p>
        <p>
          The philosophy behind this site is to keep it simple and accessible;
          It doesn't need to be complex, so it shouldn't be. Effort is put into
          ensuring that the mobile and desktop experience scale well across each
          other, and that older tools, such as{" "}
          <LinkExtern href="http://links.twibright.com/">Links</LinkExtern> work
          well with it.
        </p>
        <p>
          Link:{" "}
          <LinkExtern href="https://github.com/Grzegorzorzorz/ciolekcouk">
            GitHub
          </LinkExtern>
        </p>
      </section>
      <section>
        <h2 id="grzetris">
          <a href="#grzetris">grzetris</a>
        </h2>
        <p>
          The idea for grzetris began when I started playing *tris-likes in
          between lectures, namely{" "}
          <LinkExtern href="https://github.com/DavidGriffith/tint">
            tint
          </LinkExtern>
          . It inspired me to produce my own take on the genre, which resulted
          in grzetris.
        </p>
        <p>
          grzetris is still in its early stages, but it's a fully playable game
          at this point. The main features that I am left to implement are as
          follows:
        </p>
        <ul>
          <li>Key remap menu</li>
          <li>Scoring</li>
          <li>Difficulty levels</li>
          <li>Piece storing</li>
        </ul>
        <p>
          It's a fun project to work on, and is written in C++ with ncurses.
        </p>
        <p>
          Link:{" "}
          <LinkExtern href="https://github.com/Grzegorzorzorz/grzetris">
            GitHub
          </LinkExtern>
        </p>
      </section>
      <section>
        <h2 id="inscryption-irl">
          <a href="#inscryption-irl">inscryption-irl</a>
        </h2>
        <p>
          I started this project to automate the process of generating
          double-sided card sheets for my adaptation of the video game
          Inscryption, since I felt it would be more efficent than laying out
          hundreds of cards by hand in Inkscape.
        </p>
        <p>
          It works very well for that purpose, though I want to adapt it to be
          more generic, so that you can use it to generate other card sheets, be
          it for another game, or for business cards, for example.
        </p>
        <p>
          It's written in Python, and makes use of the Wand and fpdf libraries.
        </p>
        <p>
          Link:{" "}
          <LinkExtern href="https://github.com/Grzegorzorzorz/inscryption-irl">
            GitHub
          </LinkExtern>
        </p>
      </section>
      <section>
        <h2 id="dotfiles">
          <a href="#dotfiles">dotfiles</a>
        </h2>
        <p>
          My dotfiles are a collection of my more personally important
          configurations for software I have installed on my computer.
        </p>
        <p>
          The languages used vary quite significantly between pieces of
          software, but the more significant ones used are:
        </p>
        <ul>
          <li>
            JavaScript, for{" "}
            <LinkExtern href="https://aylur.github.io/ags-docs/">
              AGS
            </LinkExtern>{" "}
            (taskbar and GUI elements)
          </li>
          <li>
            Lua, for <LinkExtern href="https://neovim.io/">Neovim</LinkExtern>{" "}
            (text editor)
          </li>
          <li>
            Bash, for{" "}
            <LinkExtern href="https://hyprland.org/">Hyprland</LinkExtern>{" "}
            (Wayland compositor)
          </li>
        </ul>
        <p>
          Link:{" "}
          <LinkExtern href="https://github.com/Grzegorzorzorz/dotfiles">
            GitHub
          </LinkExtern>
        </p>
      </section>
      <section>
        <h2 id="gentoo">
          <a href="#gentoo">Gentoo Linux</a>
        </h2>
        <p>
          While I may not be a contributor to the project, using Gentoo since
          2020 has taught me a lot about the managment and maintainance of a
          Linux system.
        </p>
        <p>
          Gentoo gives the end user a lot more control over the system than most
          other distributions, owing to Portage (its package manager); this is a
          double edged sword, since it means you can make your system behave
          exactly as you want it to, but it also means that you can break your
          system very easily if not careful.
        </p>
        <p>
          Using Gentoo has given me valuable experience in system maintainance,
          administration, and rescue, and has taught me three key lessons:
        </p>
        <ul>
          <li>The time saving merit of good debugging proceedures</li>
          <li>The value of modularity in software</li>
          <li>The importance of reading the documentation</li>
        </ul>
        <p>
          Link:{" "}
          <LinkExtern href="https://www.gentoo.org/get-started/about/">
            About
          </LinkExtern>
        </p>
        <section>
          <h3 id="grzepository">
            <a href="#grzepository">grzepository</a>
          </h3>
          <p>
            As part of using Gentoo, I noticed that some software was either not
            packaged for Portage, or the packages that did exist were fairly of
            of date, so I started a repository for such packages that I needed.
          </p>
          <p>
            It's taught me a lot about the way that software is packaged for
            Linux distributions.
          </p>
          <p>
            Link:{" "}
            <LinkExtern href="https://github.com/Grzegorzorzorz/grzepository">
              GitHub
            </LinkExtern>
          </p>
        </section>
      </section>
    </Prose>
  );
}
