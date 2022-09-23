import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

/**
 * Process markdown input into html.
 *
 * Uses `remark` and `rehype`
 * * remark-parse - parse markdown to ast
 * * remark-gfm - adds support for github flavored markdown
 * * remark-rehype - conversion between `remark` and `rehype`
 * * rehype-highlight - syntax highlighting using highlight.js
 * * rehype-stringify - return an html string
 */
export async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}
