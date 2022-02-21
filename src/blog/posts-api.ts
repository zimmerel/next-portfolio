import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { compile } from "@mdx-js/mdx";
import type { PostData } from "./types";

async function compileContent(content: string = "") {
  return String(
    await compile(content, {
      outputFormat: "function-body",
    })
  );
}

const postsDirectory = path.join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdir(postsDirectory);
}

export async function getPostBySlug<K extends keyof PostData>(
  slug: string,
  fields: K[] = []
): Promise<Pick<PostData, K>> {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = await fs.readFile(fullPath, "utf-8");
  const { data, content } = matter(fileContents);

  const items = {} as Pick<PostData, K>;

  for (const field of fields) {
    if (field === "slug") {
      items[field] = realSlug;
    }

    if (field === "content") {
      items[field] = await compileContent(content);
    }

    if (field in data) {
      items[field] = data[field];
    }
  }

  return items;
}

export async function getAllPosts<K extends keyof PostData>(fields: K[] = []) {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(
    slugs.map((slug) => getPostBySlug(slug, [...fields, "date"]))
  );
  return posts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
}
