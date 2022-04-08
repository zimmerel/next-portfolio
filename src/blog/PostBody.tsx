import { Box } from "@chakra-ui/react";

interface Props {
  content: string;
}

export default function PostBody({ content }: Props) {
  return (
    <Box>
      <Box dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
  );
}
