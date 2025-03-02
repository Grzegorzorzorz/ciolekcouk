import { Metadata } from "next";

import LinkExtern from "@/components/linkExtern";
import Prose from "@/components/prose";

export const metadata: Metadata = {
  title: "Project: grzetris",
};

export default function Article() {
  return (
    <article>
      <Prose>
        <h1>Project: grzetris</h1>
        <p>
          A few months ago, I started making a *tris-like game, which I've,
          unfortunately, left dormant for a while. I've finally picked it up
          again, and want to share <em>grzetris</em> with you!
        </p>
        <p>
          grzetris is my take on a *tris-like game, written with ncurses in C++,
          and published under a GNU GPL v3 (and above) license. It{" "}
          <em>should</em> work on your favourite flavour of Linux, and MacOS.
        </p>
        <figure className="w-4/5 mx-auto">
          <img
            src="/resources/img/grzetris-release-20241007/grzetris-2.png"
            alt="Screenshot of grzetris"
          />
        </figure>
        <p>
          It's currently a bit bare-bones, and has a few issues, such as not
          actually having an end state, but I'm happy to say, however, that it's
          now at a level where you can play with it.
        </p>
        <p>That said, it does have the following:</p>
        <ul>
          <li>Randomised pieces</li>
          <li>Line clearing</li>
          <li>Full geometric rotation</li>
          <li>Next piece preview</li>
          <li>Quick drop</li>
        </ul>
        <p>
          Apart from fixing the issue mentioned earlier, I do have a few
          features planned:
        </p>
        <ul>
          <li>Scoring system</li>
          <li>Leaderboard</li>
          <li>Storing pieces</li>
          <li>Levels</li>
          <li>Customisable controls</li>
          <li>
            A <em>really cool menu screen</em>™
          </li>
        </ul>
        <p>
          If you want to want to have an early look at grzetris, it's now
          available on my{" "}
          <LinkExtern href="https://github.com/Grzegorzorzorz/grzetris">
            GitHub
          </LinkExtern>
          !
        </p>
        <p>That's it for this post, thank you for reading!</p>
      </Prose>
    </article>
  );
}
