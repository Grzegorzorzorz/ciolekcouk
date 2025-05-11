import React from "react";

import ArrowLeft from "@/icons/faSolidArrowLeft.svg";
import ArrowRight from "@/icons/faSolidArrowRight.svg";
import Tooltip, { TooltipPos } from "./tooltip";

export default function AberWebRing() {
  return (
    <span>
      <Tooltip text="Previous" position={TooltipPos.LEFT}>
        <a
          href="https://aberwebr.ing/ciolek/left"
          className="btn btn-xs btn-ghost px-1"
        >
          <span className="hidden">Webring: previous page</span>
          <ArrowLeft className="inline h-4 w-4 opacity-80" />
        </a>
      </Tooltip>
      <a
        href="https://aberwebr.ing"
        className="btn btn-sm btn-neutral btn-soft font-normal mx-2"
      >
        AberWebRing
      </a>
      <Tooltip text="Next" position={TooltipPos.RIGHT}>
        <a
          href="https://aberwebr.ing/ciolek/right"
          className="btn btn-xs btn-ghost px-1"
        >
          <span className="hidden">Webring: next page</span>
          <ArrowRight className="inline h-4 w-4 opacity-80" />
        </a>
      </Tooltip>
    </span>
  );
}
