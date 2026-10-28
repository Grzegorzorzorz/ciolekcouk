import { render } from "storyblok-rich-text-react-renderer";
import rendererOptions from "@/config/richTextRenderer";

import { default as ProseComp } from "../prose";

export default function Prose({ blok }: any) {
  return <ProseComp>{render(blok?.body, rendererOptions)}</ProseComp>;
}
