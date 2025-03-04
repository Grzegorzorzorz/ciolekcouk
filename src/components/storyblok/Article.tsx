import { render } from "storyblok-rich-text-react-renderer";
import rendererOptions from "@/config/richTextRenderer";

export default function Article(props: any) {
  return render(props.blok.body, rendererOptions);
}
