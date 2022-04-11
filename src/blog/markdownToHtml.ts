import { unified } from "unified";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
// import rehypeReact from "rehype-react";
// import { createElement, Fragment } from "react";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    // .use(rehypeReact, { createElement, Fragment })
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}
