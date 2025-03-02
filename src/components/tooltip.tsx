import React from "react";

export enum TooltipPos {
  TOP,
  BOTTOM,
  LEFT,
  RIGHT,
}
interface TooltipProps {
  text: string;
  position: TooltipPos;
  children: React.ReactNode;
}

export default function Tooltip({ text, position, children }: TooltipProps) {
  return (
    <div
      className={`tooltip tooltip-${TooltipPos[position].toLowerCase()}`}
      data-tip={text}
    >
      {children}
    </div>
  );
}
