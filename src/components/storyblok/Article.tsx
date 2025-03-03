import Prose from "../prose";
import { render } from "storyblok-rich-text-react-renderer";
import rendererOptions from "@/config/richTextRenderer";

export default function Article(props: any) {
  return (
    <>
      <Prose>
        <article>
          <h1>{props.blok.title}</h1>
          {render(props.blok.body, rendererOptions)}
        </article>
      </Prose>
    </>
  );
}
