import React from "react";

import ExternIcon from "@/icons/faSolidArrowUpRightFromSquare.svg";

interface LinkExternProps {
  href?: string;
  children?: React.ReactNode;
}
export default function LinkExtern({ href, children }: LinkExternProps) {
  return (
    <span>
      <a target="_blank" rel="noopener noreferrer" href={href}>
        {children}
        <ExternIcon className="inline h-2 w-2 mx-1 opacity-80" />
      </a>
    </span>
  );
}
