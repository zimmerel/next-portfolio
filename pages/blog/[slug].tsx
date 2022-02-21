import { CircularProgress } from "@chakra-ui/react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import PostLayout from "../../src/blog/PostLayout";
import { getAllPosts, getPostBySlug } from "../../src/blog/posts-api";
import BlogPost from "../../src/blog/BlogPost";
import type { PostData } from "../../src/blog/types";

export const getStaticProps: GetStaticProps<
  PostData,
  { slug: string }
> = async ({ params }) => {
  if (!params?.slug) {
    return {
      notFound: true,
    };
  }
  const post = await getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
  ]);

  return {
    props: post,
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const posts = await getAllPosts(["slug"]);
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Post(props: Props) {
  const router = useRouter();

  if (!router.isFallback && !props.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <PostLayout>
      {router.isFallback ? (
        <CircularProgress />
      ) : (
        <>
          <Head>
            <title>Blog - {props.title}</title>
          </Head>
          <BlogPost {...props} />
        </>
      )}
    </PostLayout>
  );
}
