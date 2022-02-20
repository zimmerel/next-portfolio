import { compile } from "@mdx-js/mdx";
import { CompiledPost, PostData } from "./types";

export async function compileContent(post: { content?: string }) {
  return String(
    await compile(post.content || "", {
      outputFormat: "function-body",
    })
  );
}

export async function compilePost(post: PostData): Promise<CompiledPost> {
  return {
    meta: post,
    content: await compileContent(post),
  };
}
