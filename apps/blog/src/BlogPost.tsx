import type { PostData } from './types';

export default function BlogPost({ content, title, date }: PostData) {
  return (
    <article style={{ marginBottom: '32px' }}>
      <div style={{ marginBottom: '6px' }}>
        <h1>{title}</h1>
        <h4>{date}</h4>
      </div>
      <div>
        <div className="md" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </article>
  );
}
