import { Box, CircularProgress } from "@chakra-ui/react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { BlogPost, PostData, getPostService } from "../../blog";
import markdownToHtml from "../../blog/markdownToHtml";
import formatDate from "../../blog/formatDate";

export const getStaticProps: GetStaticProps<
  PostData,
  { slug: string }
> = async ({ params }) => {
  if (!params?.slug) {
    return { notFound: true };
  }
  const post = getPostService().getBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
  ]);
  const content = await markdownToHtml(post.content || "");
  const date = formatDate(post.date, "MMMM do, yyyy");

  return {
    props: {
      ...post,
      content,
      date,
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const posts = getPostService()
    .getAll(["date", "slug"])
    .sort((postA, postZ) => (postA.date > postZ.date ? -1 : 1));

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
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
    <Box>
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
    </Box>
  );
}
