import { Box, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import BlogPost from "../../src/blog/BlogPost";
import postsApi from "../../src/blog/posts-api";
import type { PostData } from "../../src/blog/types";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import PostHeader from "../../src/blog/PostHeader";

type BaseFields = "title" | "slug";
type HeadFields = BaseFields | "date" | "author" | "author" | "excerpt";

type OtherPosts = Pick<PostData, BaseFields>;
type HeadPost = Pick<PostData, HeadFields>;

export const getStaticProps: GetStaticProps<{
  posts: [HeadPost, ...OtherPosts[]];
}> = async () => {
  const [head, ...posts] = await postsApi.getAllSorted("date", [
    "title",
    "slug",
  ]);
  const headPost = await postsApi.getBySlug(head.slug, [
    "title",
    "slug",
    "date",
    "author",
    "excerpt",
  ]);

  return {
    props: {
      posts: [headPost, ...posts],
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Index({ posts }: Props) {
  const [post, ...otherPosts] = posts;

  return (
    <Box>
      <Head>
        <title>Blog - Index</title>
      </Head>
      <Box>
        <PostHeader author={post.author} date={post.date} title={post.title} />
        <Text>{post.excerpt}</Text>
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
