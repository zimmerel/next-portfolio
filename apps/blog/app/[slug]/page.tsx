import { reformatIsoDate } from 'date-util';
import { markdownToHtml } from 'markdown';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { postService } from '../../src/services';
import type { PostData } from '../../src/types';
import BlogPost from './BlogPost';

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

export async function generateStaticParams() {
  const posts = postService
    .getAll(['date', 'slug'])
    .sort((postA, postZ) => (postA.date > postZ.date ? -1 : 1));

  return posts.map(({ slug }) => ({ params: { slug } }));
}

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Post(props: Props) {
  return <BlogPost {...props} />;
}
