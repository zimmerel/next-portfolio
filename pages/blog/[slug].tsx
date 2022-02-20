import {
  Box,
  chakra,
  CircularProgress,
  Heading,
  HTMLChakraProps,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import BlogLayout from "../../src/blog/BlogLayout";
import { getAllPosts, getPostBySlug } from "../../src/blog/posts-api";
import type { CompiledPost } from "../../src/blog/types";
import BlogPost from "../../src/blog/BlogPost";
import { compilePost } from "../../src/blog/compile";
import { GetStaticPropsResult } from "next";

export default function Post({ meta, content }: CompiledPost) {
  const router = useRouter();

  if (!router.isFallback && !meta.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <BlogLayout>
      {router.isFallback ? (
        <CircularProgress />
      ) : (
        <>
          <Head>
            <title>{meta.title}</title>
          </Head>
          <BlogPost meta={meta} content={content} />
        </>
      )}
    </BlogLayout>
  );
}

interface Params {
  params: { slug: string };
}

export async function getStaticProps({
  params,
}: Params): Promise<GetStaticPropsResult<CompiledPost>> {
  const post = await getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
  ]);

  return {
    props: await compilePost(post),
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts(["slug"]);
  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
