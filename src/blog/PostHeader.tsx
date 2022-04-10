import { Box, Heading, Text } from "@chakra-ui/react";
import { PostData } from "./types";
import formatDate from "./formatDate";

type Props = Pick<PostData, "title" | "date">;

export default function PostHeader({ date, title }: Props) {
  const formattedDate = formatDate(date, "MMMM do, yyyy");

  return (
    <Box mb={6}>
      <Heading fontSize="4xl">{title}</Heading>
      <Text fontSize="sm">{formattedDate}</Text>
    </Box>
  );
}
