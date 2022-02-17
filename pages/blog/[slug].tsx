import { Box, CircularProgress, HTMLChakraProps } from "@chakra-ui/react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { compile } from "@mdx-js/mdx";
import runtime from "react/jsx-runtime";
import BlogLayout from "../../src/components/blog-layout";
import { getAllPosts, getPostBySlug } from "../../src/posts-api";
import type { PostData } from "../../types/post";
import useMDXComponent from "../../src/mdx/useMDXComponent";

interface PostProps extends HTMLChakraProps<"main"> {
  post: PostData;
}

export default function Post({ post }: PostProps) {
  const router = useRouter();
  const { title, content } = post;

  const Content = useMDXComponent(content);

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <BlogLayout>
      {router.isFallback ? (
        <CircularProgress />
      ) : (
        <Box as="article" mb={32}>
          <Head>
            <title>{title}</title>
          </Head>
          <Content />
        </Box>
      )}
    </BlogLayout>
  );
}

interface Params {
  params: { slug: string };
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
  ]);
  const content = String(
    await compile(post.content || "", {
      outputFormat: "function-body",
    })
  );

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);
  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
