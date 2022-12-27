import matter from 'gray-matter';
import path from 'path';
import type { PostData } from './types';

export interface PostServiceProps {
  /**
   * Directory where posts are stored
   */
  directory: string;
  /**
   * Methods for working with filesystem
   */
  fs: {
    readdirSync: (dir: string) => string[];
    readFileSync: (path: string, opt: BufferEncoding) => string;
  };
}

export function createPostService({ fs, directory }: PostServiceProps) {
  const getSlugs = () => fs.readdirSync(directory);

  const getBySlug = <K extends keyof PostData>(
    slug: string,
    fields: K[]
  ): Pick<PostData, K> => {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(directory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const { data, content } = matter(fileContents);

    // Ensure only the minimal needed data is exposed
    const processField = (field: K): PostData[K] => {
      switch (field) {
        case 'slug':
          return realSlug;
        case 'content':
          return content;
        default:
          return data[field];
      }
    };

    const entries = fields
      .map((field) => [field, processField(field)])
      .filter(([, value]) => Boolean(value));

    return Object.fromEntries(entries);
  };

  const getAll = <K extends keyof PostData>(fields: K[]): Pick<PostData, K>[] =>
    getSlugs().map((slug) => getBySlug(slug, fields));

  return {
    getSlugs,
    getBySlug,
    getAll,
  };
}
