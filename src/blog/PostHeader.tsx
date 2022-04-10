import { Box, Heading, Text } from "@chakra-ui/react";
import { PostData } from "./types";

type Props = Pick<PostData, "title" | "date">;

export default function PostHeader({ date, title }: Props) {
  return (
    <Box mb={6}>
      <Heading fontSize="4xl">{title}</Heading>
      <Text fontSize="sm">{date}</Text>
    </Box>
  );
}
