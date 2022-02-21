import { Box, Heading } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import { PostData } from "./types";

function usePostDate(isoDate: string) {
  const date = parseISO(isoDate);
  const today = new Date();

  if (
    date.getFullYear() === today.getFullYear() &&
    date.getDate() === today.getDate()
  ) {
    return "today";
  }

  return format(date, "MMM do");
}

type Props = Pick<PostData, "author" | "title" | "date">;

export default function PostHeader({ date, author, title }: Props) {
  const formattedDate = usePostDate(date);

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
