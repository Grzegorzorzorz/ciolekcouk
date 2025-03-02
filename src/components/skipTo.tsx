import React from "react";

interface SkipToProps {
  idTo: string;
  children: React.ReactNode;
}

export default function SkipTo({ idTo, children }: SkipToProps) {
  return (
    <a
      href={`#${idTo}`}
      className="fixed top-0 z-50 left-1/2 -translate-x-1/2 min-w-fit -translate-y-[200%] focus:translate-y-20 transition p-6 rounded-lg text-xl bg-black text-white font-extrabold"
    >
      {children}
    </a>
  );
}
