import type { Metadata } from "next";

import { titleSuffix } from "@/lib/const";

import Prose from "@/components/prose";

export const metadata: Metadata = {
  title: `Home ${titleSuffix}`,
  description:
    "Learn about Grzegorz Ciołek, a Computer Science student at Aberystwyth " +
    "University. Find out more about his projects, hobbies, and interests.",
};

export default function Home() {
  return (
    <>
      <Prose>
        <h1>Home</h1>
        <p>Hello, and welcome to my website!</p>
        <p>
          On this website I plan to list off my various projects, ideas, and
          hobbies, both for my own sake, and for those who may wish to see them.
        </p>
        <p>
          Feel free to <a href="/contact/">get in touch</a>!
        </p>
        <h2>About me</h2>
        <p>
          My name is Grzegorz (Greg); I am a second year Computer Science
          student at Aberystwyth University, studying to, hopefully, achieve a
          Master's level qualification (MComp).
        </p>
        <p>
          I have been programming since the age of twelve, and have found a
          passion in solving tough problems through pragmatic, methodical means.
          I started out with Python, before soon moving onto C++, driven to do
          so by the performance benefits, though I quickly learnt to love the
          memory control granted by the language to the programmer. I am now
          learning Java as part of my course at University.
        </p>
        <p>
          I started using Linux when I turned fourteen, Kubuntu 18.10
          specifically, after getting fed up with the closed off nature off
          Windows; it was difficult to hack apart and customise. I quickly
          adapted to, and embraced, Linux and the open source message it
          carries, and soon wanted to learn more about how such systems
          function, switching to Arch Linux for just under two years, before
          finally settling on Gentoo Linux in 2020 which I use to this day.
          Running Arch and Gentoo has taught me the value of good debugging,
          reading the documentation, and the importance of modularity, not just
          in operating systems, but in software as a whole.
        </p>
        <p>
          Outside of the field, I enjoy photography, cycling, cooking, and
          sewing.
        </p>
      </Prose>
    </>
  );
}
