import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import type { PostData } from "./types";

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

  const items: any = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }

    if (field === "content") {
      items[field] = content;
    }

    if (field in data) {
      items[field] = data[field];
    }
  });

  return items;
}

export async function getAllPosts<K extends keyof PostData>(fields: K[] = []) {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(
    slugs.map((slug) => getPostBySlug(slug, [...fields, "date"]))
  );
  return posts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
}
