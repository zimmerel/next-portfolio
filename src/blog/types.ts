export interface PostMeta {
  title: string;
  author: string;
  date: string;
  slug: string;
}

export interface PostData extends PostMeta {
  content: string;
}

export interface CompiledPost {
  meta: PostMeta;
  content: string;
}
