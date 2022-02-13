import { Box, CircularProgress, HTMLChakraProps } from "@chakra-ui/react";
import { useRouter } from "next/router";
import BlogLayout from "../../../src/components/blog-layout";
import { getAllPosts, getPostBySlug } from "../../../src/posts-api";
import { PostData } from "../../../types/post";
import ErrorPage from "next/error";
import Head from "next/head";
import markdownToHTML from "../../../src/markdownToHtml";

interface PostProps extends HTMLChakraProps<"main"> {
  post: PostData;
}

export default function Post({ post }: PostProps) {
  const router = useRouter();

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
            <title>{post.title}</title>
          </Head>
          {JSON.stringify(post)}
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
  const content = await markdownToHTML(post.content || "");

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
