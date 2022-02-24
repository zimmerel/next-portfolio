import fs from "fs/promises";
import matter, { GrayMatterOption } from "gray-matter";
import path from "path";
import type { PostData } from "./types";
import compileContent from "./compileContent";

const postsDirectory = path.join(process.cwd(), "_posts");

interface PostsApiDeps {
  fs: {
    readdir(input: string): Promise<string[]>;
    readFile(path: string, encoding: BufferEncoding): Promise<string>;
  };
  path: {
    join(...paths: string[]): string;
  };
  matter<O extends GrayMatterOption<string, O>>(
    input: string,
    options?: O
  ): {
    content: string;
    data: Record<string, any>;
    excerpt?: string;
  };
  compile(content: string): Promise<string>;
}

const hasExcerpt = (fields: string[]): boolean => fields.includes("excerpt");

export class PostsApi {
  constructor(private directory: string, private deps: PostsApiDeps) {}

  async getSlugs(): Promise<string[]> {
    const { fs } = this.deps;
    try {
      return fs.readdir(this.directory);
    } catch {
      return [];
    }
  }

  async getBySlug<K extends keyof PostData>(
    slug: string,
    fields: K[]
  ): Promise<Pick<PostData, K>> {
    const { path, fs, matter, compile } = this.deps;

    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = path.join(this.directory, `${realSlug}.mdx`);
    const fileContents = await fs.readFile(fullPath, "utf-8");

    const { data, content } = matter(fileContents);

    const items = {} as Pick<PostData, K>;

    // Ensure only the minimal needed data is exposed
    for (const field of fields) {
      if (field === "slug") {
        items[field] = realSlug;
      } else if (field === "content") {
        items[field] = await compile(content);
      } else if (field in data) {
        items[field] = data[field];
      }
    }

    return items;
  }

  async getAll<K extends keyof PostData>(
    fields: K[]
  ): Promise<Pick<PostData, K>[]> {
    const slugs = await this.getSlugs();
    return Promise.all(slugs.map((slug) => this.getBySlug(slug, fields)));
  }

  async getAllSorted<K extends keyof PostData>(by: K, fields: K[] = []) {
    const posts = await this.getAll([...fields, by]);
    return posts.sort((postA, postB) => (postA[by] > postB[by] ? -1 : 1));
  }
}

export const postsApi = new PostsApi(postsDirectory, {
  fs,
  path,
  matter,
  compile: compileContent,
});
export default postsApi;
