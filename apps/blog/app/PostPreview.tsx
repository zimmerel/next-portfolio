import NextLink from 'next/link';
import type { PostData } from '../src/types';

type PostPreviewProps = Pick<PostData, 'date' | 'title' | 'excerpt' | 'slug'>;

export default function PostPreview({
  date,
  title,
  excerpt,
  slug,
}: PostPreviewProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'start',
        gap: 5,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          gap: 0.5,
        }}
      >
        <h1>
          <NextLink
            href={{
              pathname: '/blog/[slug]',
              query: { slug },
            }}
          >
            {title}
          </NextLink>
        </h1>
        <h4>{date}</h4>
      </div>
      <div style={{ maxLines: 3 }}>{excerpt}</div>
    </div>
  );
}
