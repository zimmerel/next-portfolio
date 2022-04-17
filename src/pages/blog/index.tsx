import { Box, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import formatPostDate from '../../blog/formatPostDate';
import getPostService from '../../blog/getPostService';
import PostPreview from '../../blog/PostPreview';
import { PostData } from '../../blog/types';

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
      date: formatPostDate(post.date),
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
    <Box>
      <Head>
        <title>Blog - Index</title>
      </Head>
      <VStack spacing={12}>
        {posts.map((post) => (
          <PostPreview key={post.slug} {...post} />
        ))}
      </VStack>
    </Box>
  );
}
