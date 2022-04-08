import { Box, Heading } from "@chakra-ui/react";
import { PostData } from "./types";
import useDateFormat from "./useDateFormat";

type Props = Pick<PostData, "title" | "date">;

export default function PostHeader({ date, title }: Props) {
  const formattedDate = useDateFormat(date);

  return (
    <Box mb={6}>
      <Heading color={"purple.400"}>{title}</Heading>
      <Heading size="sm">{formattedDate}</Heading>
    </Box>
  );
}
