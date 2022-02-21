import { Box, Link } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import BlogPost from "../../src/blog/BlogPost";
import { getAllPosts } from "../../src/blog/posts-api";
import type { PostData } from "../../src/blog/types";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps: GetStaticProps<{
  posts: PostData[];
}> = async () => {
  const posts = await getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "content",
  ]);

  return {
    props: {
      posts,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Index({ posts }: Props) {
  const [headPost, ...otherPosts] = posts;

  return (
    <Box>
      <Head>
        <title>Blog - Index</title>
      </Head>
      <Box>
        <BlogPost {...headPost} />
      </Box>
      <Box>
        {otherPosts.map(({ slug, title }) => (
          <NextLink
            key={slug}
            href={{
              pathname: "/blog/[slug]",
              query: { slug },
            }}
            passHref
          >
            <Link>{title}</Link>
          </NextLink>
        ))}
      </Box>
    </Box>
  );
}
