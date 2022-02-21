import { Box } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import type { PostData } from "./types";

export default function BlogPost({ content, ...headerProps }: PostData) {
  return (
    <Box as="article" mb={32}>
      <PostHeader {...headerProps} />
      <PostBody content={content} />
    </Box>
  );
}
