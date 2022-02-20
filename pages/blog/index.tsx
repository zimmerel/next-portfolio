import { Box, Link } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import BlogPost from "../../src/blog/BlogPost";
import { getAllPosts } from "../../src/blog/posts-api";
import type { CompiledPost, PostData } from "../../src/blog/types";
import { compileContent, compilePost } from "../../src/blog/compile";
import { GetStaticProps, GetStaticPropsResult } from "next";

interface Props {
  headPost: CompiledPost;
  otherPosts: PostData[];
}

export default function Index({ headPost, otherPosts }: Props) {
  return (
    <Box>
      <Head>
        <title>Blog</title>
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

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const [headPost, ...otherPosts] = await getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "content",
  ]);

  return {
    props: {
      headPost: await compilePost(headPost),
      otherPosts,
    },
  };
}
