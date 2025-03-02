import type { Metadata } from "next";

import Prose from "@/components/prose";
import Tooltip from "@/components/tooltip";
import { TooltipPos } from "@/components/tooltip";

import WarningIcon from "@/icons/faSolidTriangleExclamation.svg";

export const metadata: Metadata = {
  title: "Contact",
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
            href="/resources/keys/contact.asc"
          >
            PGP key
          </a>
        </li>
        <li>
          <strong>Mobile</strong>:{" "}
          <Tooltip text="Public phone" position={TooltipPos.BOTTOM}>
            <a href="tel:+447599857384">+44 7599 857 384</a>
          </Tooltip>
        </li>
      </ul>
      <h2>University</h2>
      <div className="alert alert-warning">
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
            href="/resources/keys/grc22.asc"
          >
            PGP key
          </a>
        </li>
      </ul>
      <div className="divider"></div>
      <div>
        <p>
          I check the email inbox regularly! Please do reach out by email before
          calling; this is a dedicated phone number that I don't check often and
          avoid unsolicited calls from.
        </p>
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
