import React from "react";

interface CollapseProps {
  title: string;
  children: React.ReactNode;
}

export default function Collapse({ title, children }: CollapseProps) {
  return (
    <div className="collapse my-2 border border-base-200 collapse-arrow">
      <input type="checkbox" />
      <div className="collapse-title">
        <h2 className="font-bold text-2xl">{title}</h2>
      </div>
      <div className="collapse-content max-w-none">
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
