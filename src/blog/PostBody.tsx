import { Box, Text, Heading, Code, useColorModeValue } from "@chakra-ui/react";
import { MDXComponents } from "mdx/types";
import mdxComponents from "../mdx/mdxComponents";
import useMDXComponent from "../mdx/useMDXComponent";

export default function PostBody({ content }: { content: string }) {
  const Content = useMDXComponent(content);

  const bgColor = useColorModeValue("gray.100", "gray.900");

  return (
    <Box
      bgColor={bgColor}
      transition="background-color 0.2s"
      p={5}
      borderRadius="lg"
    >
      <Content components={mdxComponents} />
    </Box>
  );
}
