import { Heading, Link, Text, VStack } from "@chakra-ui/react";
import { PostData } from "./types";
import NextLink from "next/link";

type PreviewPostData = Pick<PostData, "date" | "title" | "excerpt" | "slug">;

interface Props {
  post: PreviewPostData;
}

export default function PostPreview({ post }: Props) {
  const { date, title, excerpt, slug } = post;

  return (
    <VStack w="full" align="start" spacing={5}>
      <VStack spacing={0.5} align="start">
        <Heading fontWeight="bold" fontSize="4xl">
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
        <Text fontSize="sm">{date}</Text>
      </VStack>
      <Text noOfLines={3}>{excerpt}</Text>
    </VStack>
  );
}
