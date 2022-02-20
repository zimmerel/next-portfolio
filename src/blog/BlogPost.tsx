import { Box, Heading } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import type { CompiledPost } from "./types";
import useMDXComponent from "../mdx/useMDXComponent";

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

export default function BlogPost({ meta: data, content }: CompiledPost) {
  const { title, author, date } = data;
  const Content = useMDXComponent(content);

  const formattedDate = usePostDate(date);

  return (
    <Box as="article" mb={32}>
      <Box mb={6}>
        <Heading size="md">{author}</Heading>
        <Heading size="xs" mb={2}>
          {formattedDate}
        </Heading>
        <Heading>{title}</Heading>
      </Box>
      <Box>
        <Content />
      </Box>
    </Box>
  );
}
