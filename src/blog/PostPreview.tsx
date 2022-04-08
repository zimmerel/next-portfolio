import { BoxProps, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { PostData } from "./types";
import useDateFormat from "./useDateFormat";
import NextLink from "next/link";

type PreviewPostData = Pick<PostData, "date" | "title" | "excerpt" | "slug">;

interface Props extends BoxProps {
  post: PreviewPostData;
}

export default function PostPreview({ post, ...boxProps }: Props) {
  const { date, title, excerpt, slug } = post;
  const formattedDate = useDateFormat(date);

  return (
    <VStack w="full" align="start">
      <Heading fontWeight="bold" fontSize="3xl" color="purple.200">
        <NextLink
          href={{
            pathname: "/blog/[slug]",
            query: { slug },
          }}
          passHref
        >
          <Link>{title}</Link>
        </NextLink>
      </Heading>
      <Text fontSize="xs">{formattedDate}</Text>
      <Text noOfLines={3}>{excerpt}</Text>
    </VStack>
  );
}
