import LinkExtern from "@/components/linkExtern";
import React from "react";
import {
  NODE_IMAGE,
  NODE_LI,
  MARK_LINK,
} from "storyblok-rich-text-react-renderer";

export const rendererOptions: any = {
  nodeResolvers: {
    [NODE_IMAGE]: (children: React.ReactNode, props: any) => {
      const { src } = props;
      return <img src={src} className="rounded-md w-4/5 mx-auto" />;
    },
    [NODE_LI]: (children: any) => {
      return (
        <li>
          {React.Children.map(children, (child: React.ReactElement<any>) => {
            if (child !== undefined && child !== null) {
              return <>{child.props.children}</>;
            }
          })}
        </li>
      );
    },
  },
  markResolvers: {
    [MARK_LINK]: (children: React.ReactNode, props: any) => {
      const { linktype, href, target } = props;
      if (href.match(/^(https?:)?\/\//)) {
        return <LinkExtern href={href}>{children}</LinkExtern>;
      }
    },
  },
};

export default rendererOptions;
