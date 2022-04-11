import path from "path";
import type { PostData } from "./types";

interface PostServiceProps {
  /**
   * Directory where posts are stored
   */
  directory: string;
  /**
   * Methods for performing filesystem queries
   */
  fs: {
    readdirSync: (dir: string) => string[];
    readFileSync: (path: string, opt: BufferEncoding) => string;
  };
  /**
   * Parse frontmatter from raw markdown file contents
   */
  parse: (input: string) => {
    data: Record<string, any>;
    content: string;
  };
  /**
   * Methods to manipulate paths
   */
  path: Pick<typeof path, "join">;
}

export default class PostService {
  constructor(private props: PostServiceProps) {}

  getSlugs(): string[] {
    const { fs, directory } = this.props;

    return fs.readdirSync(directory);
  }

  getBySlug<K extends keyof PostData>(
    slug: string,
    fields: K[]
  ): Pick<PostData, K> {
    const { fs, parse, directory, path } = this.props;

    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = path.join(directory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const { data, content } = parse(fileContents);

    // Ensure only the minimal needed data is exposed
    const processField = (field: K): PostData[K] => {
      switch (field) {
        case "slug":
          return realSlug;
        case "content":
          return content;
        default:
          return data[field];
      }
    };

    const entries = fields
      .map((field) => [field, processField(field)])
      .filter(([, value]) => Boolean(value));

    return Object.fromEntries(entries);
  }

  getAll<K extends keyof PostData>(fields: K[]): Pick<PostData, K>[] {
    return this.getSlugs().map((slug) => this.getBySlug(slug, fields));
  }
}
