import { StoryblokServerComponent } from "@storyblok/react/rsc";

export default function Page({ blok }: any) {
  console.log(JSON.stringify(blok, null, 2));
  return (
    <>
      {blok.content?.map((nestedBlok: any) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </>
  );
}
