import LinkExtern from "@/components/linkExtern";
import Prose from "@/components/prose";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Migrating to Express.js",
};

export default function Article() {
  return (
    <article>
      <Prose>
        <section>
          <h1>Migrating to Express.js</h1>
          <p>
            Yesterday, I went through the process of migrating this website to
            Express.js, from a previously pure HTML site. I'm very happy to say
            that it went well, and after much testing, the website should be
            virtually indistinguishable from its previous form (a successful
            migration).
          </p>
          <p>
            If you want to see the source for this website, it's available on my{" "}
            <LinkExtern href="https://github.com/Grzegorzorzorz/ciolekcouk/">
              GitHub
            </LinkExtern>
            .
          </p>
        </section>
        <section>
          <h2 id="rationale">
            <a href="#rationale">Rationale</a>
          </h2>
          <p>
            When planning a new projects page for the site, the header and
            navigation started to become an issue; they were duplicated in every
            page, and any changes to them would require a lot of work to ensure
            consistency.
          </p>
          <p>
            I also wanted to learn about frameworks in JS, and I felt that the
            best way to do so would be to make use of one on my personal
            website.
          </p>
          <p>
            The simplest solution, I felt, would be to start using templating
            for those components, and so I settled on Express.js with ejs as the
            templating engine.
          </p>
        </section>
        <section>
          <h2 id="implementation">
            <a href="#implementation">Implementation</a>
          </h2>
          <p>
            Since Node and JS frameworks are fairly novel to me, I began by
            looking at examples to point me in the right direction. I then
            consulted the documentation on the functions used, which let me
            confidently develop the solution I use now.
          </p>
          <p>
            Next I had to make it work with Vercel, which I currently use to
            host the website. So I installed their dev tools and got to work.
          </p>
          <p>
            This was a bit more rocky, as the Express documentation on their end
            is missing a few details, but after a failed deployment and further
            research, I was able to make it work, and am happy to say it works
            well.
          </p>
        </section>
        <section>
          <h2 id="next-steps">
            <a href="#next-steps">What next?</a>
          </h2>
          <p>
            Following this success, I want to use server side rendering further
            to make the website easier to run. One feature I have in mind is the
            automatic generation of the articles table, so I don't have to
            manually update it when I upload a new article to the site. It makes
            my life easier, and lowers the chance of human error.
          </p>
        </section>
      </Prose>
    </article>
  );
}
