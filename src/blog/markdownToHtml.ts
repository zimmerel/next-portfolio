import { unified } from 'unified';
import remarkRehype from 'remark-rehype';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}
