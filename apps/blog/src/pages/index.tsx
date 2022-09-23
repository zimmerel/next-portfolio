import { reformatIsoDate } from 'date-util';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import getPostService from '../getPostService';
import PostPreview from '../PostPreview';
import type { PostData } from '../types';

const fields = ['title', 'slug', 'date', 'excerpt'] as const;
type Fields = typeof fields[number];

export const getStaticProps: GetStaticProps<{
  posts: Pick<PostData, Fields>[];
}> = async function () {
  const posts = getPostService()
    .getAll([...fields])
    .sort((postA, postZ) => (postA.date > postZ.date ? -1 : 1))
    .map((post) => ({
      ...post,
      date: reformatIsoDate(post.date),
    }));

  return {
    props: {
      posts,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Index({ posts }: Props) {
  return (
    <div>
      <Head>
        <title>Blog - Index</title>
      </Head>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {posts.map((post) => (
          <PostPreview key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}
