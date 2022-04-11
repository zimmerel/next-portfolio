import { Box, Heading, Text } from "@chakra-ui/react";
import type { PostData } from "./types";

export default function BlogPost({ content, title, date }: PostData) {
  return (
    <Box as="article" mb={32}>
      <Box mb={6}>
        <Heading fontSize="4xl">{title}</Heading>
        <Text fontSize="sm">{date}</Text>
      </Box>
      <Box>
        <Box dangerouslySetInnerHTML={{ __html: content }} />
      </Box>
    </Box>
  );
}
