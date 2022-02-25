import { compile } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";

/**
 * Compile mdx code
 * @param code MDX code to compile
 * @returns
 */
export default async function compileMDX(code: string = "") {
  const compiledCode = await compile(code, {
    outputFormat: "function-body",
    remarkPlugins: [remarkGfm],
  });

  return String(compiledCode);
}
