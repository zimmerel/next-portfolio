import { compile } from "@mdx-js/mdx";

export default async function compileContent(content: string = "") {
  return String(
    await compile(content, {
      outputFormat: "function-body",
    })
  );
}
