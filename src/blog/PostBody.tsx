import { Box } from "@chakra-ui/react";
import useMDXComponent from "../mdx/useMDXComponent";

export default function PostBody({ content }: { content: string }) {
  const Content = useMDXComponent(content);

  return (
    <Box>
      <Content />
    </Box>
  );
}
