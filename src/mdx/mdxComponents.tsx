import { Box, Text, Heading, Code, Link, TextProps } from "@chakra-ui/react";
import Image, { ImageProps } from "next/image";
import type { MDXComponents } from "mdx/types";

const Paragraph = ({ children, ...props }: TextProps) => (
  <Text {...props} mb={2}>
    {children}
  </Text>
);

const ResponsiveImage = ({ alt, ...props }: JSX.IntrinsicElements["img"]) => (
  <Image alt={alt} layout="responsive" {...(props as ImageProps)} />
);

const mdxComponents: MDXComponents = {
  img: ResponsiveImage,
  a: Link,
  p: Paragraph,
  inlineCode: Code,
  h1: (props) => <Heading {...props} />,
};

export default mdxComponents;
