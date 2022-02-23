import { Box, Link } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import BlogPost from "../../src/blog/BlogPost";
import postsApi from "../../src/blog/posts-api";
import type { PostData } from "../../src/blog/types";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import compileContent from "../../src/blog/compileContent";

export const getStaticProps: GetStaticProps<{
  posts: [PostData, ...Pick<PostData, "title" | "slug">[]];
}> = async () => {
  const [head, ...posts] = await postsApi.getAllSorted("date", [
    "title",
    "slug",
  ]);
  const headPost = await postsApi.getBySlug(head.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
  ]);

  headPost.content = await compileContent(headPost.content);

  return {
    props: {
      posts: [headPost, ...posts],
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
