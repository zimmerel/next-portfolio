import fs from "fs";
import matter from "gray-matter";
import path from "path";
import type { PostData } from "./types";

const postsDirectory = path.join(process.cwd(), "_posts");

export class PostsApi {
  private directory: string;

  constructor(directory: string) {
    this.directory = directory;
  }

  getSlugs(): string[] {
    return fs.readdirSync(this.directory);
  }

  getBySlug<K extends keyof PostData>(
    slug: string,
    fields: K[]
  ): Pick<PostData, K> {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = path.join(this.directory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const { data, content } = matter(fileContents);

    const items = {} as Pick<PostData, K>;

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
      if (field === "slug") {
        items[field] = realSlug;
      } else if (field === "content") {
        items[field] = content;
      } else if (data[field] !== undefined) {
        items[field] = data[field];
      }
    });

    return items;
  }

  getAll<K extends keyof PostData>(fields: K[]): Pick<PostData, K>[] {
    return this.getSlugs().map((slug) => this.getBySlug(slug, fields));
  }
}

export const postsApi = new PostsApi(postsDirectory);
