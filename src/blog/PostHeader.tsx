import { Box, Heading, Text } from "@chakra-ui/react";
import { PostData } from "./types";
import useDateFormat from "./useDateFormat";

type Props = Pick<PostData, "title" | "date">;

export default function PostHeader({ date, title }: Props) {
  const formattedDate = useDateFormat(date);

  return (
    <Box mb={6}>
      <Heading fontSize="4xl">{title}</Heading>
      <Text fontSize="sm">{formattedDate}</Text>
    </Box>
  );
}
