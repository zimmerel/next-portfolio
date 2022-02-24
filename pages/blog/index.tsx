import { Box, StackDivider, VStack } from "@chakra-ui/react";
import Head from "next/head";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { PostData } from "../../src/blog/types";
import postsApi from "../../src/blog/posts-api";
import PostPreview from "../../src/blog/PostPreview";

const fields = [
  "title",
  "slug",
  "date",
  "author",
  "excerpt",
  "coverImageUrl",
] as const;
type Fields = typeof fields[number];

export const getStaticProps: GetStaticProps<{
  posts: Pick<PostData, Fields>[];
}> = async () => {
  const posts = await postsApi.getAllSorted("date", [...fields]);

  return {
    props: {
      posts,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Index({ posts }: Props) {
  return (
    <Box>
      <Head>
        <title>Blog - Index</title>
      </Head>
      <VStack spacing={2} divider={<StackDivider />}>
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </VStack>
    </Box>
  );
}
