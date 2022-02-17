import { Box, Link } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import { getAllPosts } from "../../src/posts-api";
import { PostData } from "../../types/post";

interface Props {
  allPosts: PostData[];
}

export default function Index({ allPosts }: Props) {
  return (
    <Box>
      <Head>
        <title>Blog</title>
      </Head>
      <Box>
        {allPosts.map((post) => (
          <NextLink key={post.slug} href={`/blog/${post.slug}`} passHref>
            <Link>{post.title}</Link>
          </NextLink>
        ))}
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
