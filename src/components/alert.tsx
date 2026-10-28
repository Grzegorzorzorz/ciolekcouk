import InfoIcon from "@/icons/faSolidCircleInfo.svg";
import SuccessIcon from "@/icons/faSolidTrophy.svg";
import WarningIcon from "@/icons/faSolidTriangleExclamation.svg";
import ErrorIcon from "@/icons/faSolidCircleXMark.svg";
import { FC, SVGProps } from "react";

interface Props {
  severity: "info" | "success" | "warning" | "error";
  children?: React.ReactNode;
}

export default function Alert({ severity, children }: Props) {
  let Icon: FC<SVGProps<SVGElement>>;
  switch (severity) {
    case "info":
      Icon = InfoIcon;
      break;
    case "success":
      Icon = SuccessIcon;
      break;
    case "warning":
      Icon = WarningIcon;
      break;
    case "error":
      Icon = ErrorIcon;
      break;
  }
  return (
    <div className={`alert alert-${severity} not-prose my-5`}>
      <Icon className="h-5 w-5" />
      <span>{children}</span>
    </div>
  );
}
