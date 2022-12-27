import { reformatIsoDate } from 'date-util';
import { markdownToHtml } from 'markdown';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import BlogPost from '../BlogPost';
import { postService } from '../services';
import { PostData } from '../types';

type WithSlug = { slug: string };

export const getStaticProps: GetStaticProps<PostData, WithSlug> =
  async function ({ params }) {
    if (!params?.slug) {
      return { notFound: true };
    }

    const post = postService.getBySlug(params.slug, [
      'title',
      'date',
      'slug',
      'content',
    ]);
    const content = await markdownToHtml(post.content || '');
    const date = reformatIsoDate(post.date);

    return {
      props: {
        ...post,
        content,
        date,
      },
    };
  };

export const getStaticPaths: GetStaticPaths<WithSlug> = async function () {
  const posts = postService
    .getAll(['date', 'slug'])
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
    <div>
      {router.isFallback ? (
        <>...Progress</>
      ) : (
        <>
          <Head>
            <title>Blog - {props.title}</title>
          </Head>
          <BlogPost {...props} />
        </>
      )}
    </div>
  );
}
