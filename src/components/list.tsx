import React from "react";

interface ListProps {
  className?: string;
  children: React.ReactNode;
}

export default function List({ className, children }: ListProps) {
  return (
    <ul
      className={`list bg-base-100 rounded-box border border-base-200 ${className !== undefined ? className : ""}`}
    >
      {children}
    </ul>
  );
}
