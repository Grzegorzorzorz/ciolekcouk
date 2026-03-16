import type { Metadata } from "next";

import { titleSuffix } from "@/lib/const";
import Prose from "@/components/prose";
import Tooltip from "@/components/tooltip";
import { TooltipPos } from "@/components/tooltip";

import WarningIcon from "@/icons/faSolidTriangleExclamation.svg";

export const metadata: Metadata = {
  title: `Contact ${titleSuffix}`,
  description:
    "Find my contact details and get in touch with me via email or phone.",
};

export default function Contact() {
  return (
    <Prose>
      <h1>Contact</h1>
      <ul>
        <li>
          <strong>Email</strong>:{" "}
          <Tooltip text="Public email" position={TooltipPos.TOP}>
            <a href="mailto:contact@ciolek.co.uk">contact@ciolek.co.uk</a>
          </Tooltip>
          <a
            className="not-prose ml-2 font-bold badge badge-info"
            href="/resources/keys/contact.ciolekcouk.asc"
          >
            PGP key
          </a>
        </li>
      </ul>
      <h2>University</h2>
      <div className="alert alert-warning not-prose">
        <WarningIcon className="h-5 w-5" />
        <span>
          I ask that these details be used purely for academic purposes. Other
          queries will <strong>not</strong> get a response.
        </span>
      </div>
      <ul>
        <li>
          <strong>Email</strong>:{" "}
          <Tooltip text="University email" position={TooltipPos.BOTTOM}>
            <a href="mailto:grc22@aber.ac.uk">grc22@aber.ac.uk</a>
          </Tooltip>
          <a
            className="not-prose ml-2 font-bold badge badge-info"
            href="/resources/keys/grc22.aberacuk.asc"
          >
            PGP key
          </a>
        </li>
      </ul>
      <div className="divider"></div>
      <div>
        <p>I check the email inbox regularly! Please feel free to reach out.</p>
        <p>
          The university email is provided purely for convenience, and with
          permission from the university. Please use the public email for any
          questions not related to university work.
        </p>
        <p>
          Using PGP? Please make sure you attach your public key if you'd like
          an encrypted response!
        </p>
      </div>
    </Prose>
  );
}
