import { Box, Heading } from "@chakra-ui/react";
import { PostData } from "./types";
import useDateFormat from "./useDateFormat";

type Props = Pick<PostData, "author" | "title" | "date">;

export default function PostHeader({ date, author, title }: Props) {
  const formattedDate = useDateFormat(date);

  return (
    <Box mb={6}>
      <Heading size="md">{author}</Heading>
      <Heading size="xs" mb={2}>
        {formattedDate}
      </Heading>
      <Heading>{title}</Heading>
    </Box>
  );
}
