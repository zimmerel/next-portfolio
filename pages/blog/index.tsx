import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { getAllPosts } from "../../src/posts-api";
import { PostData } from "../../types/post";

interface Props {
  allPosts: PostData[];
}

export default function Index({ allPosts }: Props) {
  const [{ content, ...post }] = allPosts;

  return (
    <Box>
      <Head>
        <title>Blog</title>
      </Head>
      <Box>
        <Box>{JSON.stringify(post, null, 2)}</Box>
      </Box>
    </Box>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "date", "slug", "author", "content"]);

  return {
    props: {
      allPosts,
    },
  };
}
