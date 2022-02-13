import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { PostData } from "../types/post";

const postsDirectory = path.join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug<K extends keyof PostData>(
  slug: string,
  fields: K[] = []
): Pick<PostData, K> {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
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

export function getAllPosts<K extends keyof PostData>(fields: K[] = []) {
  const slugs = getPostSlugs();
  return slugs
    .map((slug) => getPostBySlug(slug, [...fields, "date"]))
    .sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
}
