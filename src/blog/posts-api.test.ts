import { jest } from "@jest/globals";
import { PostsApi } from "./posts-api";

describe("PostsApi", () => {
  const fakePostsDirectory = "dir/posts/";
  const fakePostFiles: Record<string, string> = {
    "post-one.mdx": "# heading",
    "post-two.mdx": "## heading",
    "post-three.mdx": "# heading",
  };

  const fakeMatterData = {
    title: "Test",
    author: "Zach",
    date: new Date().toISOString(),
  };
  let postsApi: PostsApi;
  const mockReaddir = jest.fn(async (input: string) =>
    Object.keys(fakePostFiles)
  );
  const mockReadFile = jest.fn(async (input: string) => {
    const fileName = input.split("/").at(-1) ?? "";
    const fileContents = fakePostFiles[fileName];
    if (!fileContents) {
      throw new Error(`ENOENT: no such file or directory, open '${input}'`);
    }
    return fileContents;
  });
  const mockJoin = jest.fn((...args: string[]) => args.join("/"));
  const mockMatter = jest.fn((input: string) => ({
    data: fakeMatterData,
    content: input,
  }));
  const mockCompile = jest.fn(async (input?: string) => input ?? "");

  beforeEach(() => {
    mockReaddir.mockClear();
    mockReadFile.mockClear();
    mockJoin.mockClear();
    mockMatter.mockClear();
    mockCompile.mockClear();

    postsApi = new PostsApi(fakePostsDirectory, {
      fs: { readdir: mockReaddir, readFile: mockReadFile },
      path: { join: mockJoin },
      matter: mockMatter,
      compile: mockCompile,
    });
  });

  describe("postsApi.getSlugs()", () => {
    it("should get list of file names in postsDirectory", async () => {
      const slugs = await postsApi.getSlugs();
      expect(slugs).toStrictEqual(Object.keys(fakePostFiles));
      expect(mockReaddir).toBeCalledWith(fakePostsDirectory);
    });
  });

  describe("postsApi.getBySlug()", () => {
    it("should get post data from slug with or without extension", async () => {
      const slugs = ["post-one", "post-one.mdx"];
      const posts = await Promise.all(
        slugs.map((slug) => postsApi.getBySlug(slug, ["content"]))
      );
      expect(posts[0]).toBeTruthy();
      expect(posts[0]).toStrictEqual(posts[1]);
    });
    it("should only get specified fields", async () => {
      const post = await postsApi.getBySlug("post-one", ["title", "author"]);
      expect(Object.keys(post)).toStrictEqual(["title", "author"]);
    });
    it("should use matter function to parse frontmatter", async () => {
      await postsApi.getBySlug("post-one", ["title", "author"]);
      expect(mockMatter).toHaveBeenCalledWith(fakePostFiles["post-one.mdx"]);
    });
    it("should compile content when content field is specified", async () => {
      const post = await postsApi.getBySlug("post-one", ["content"]);
      expect(post.content).toBeTruthy();
      expect(mockCompile).toHaveBeenCalledWith(fakePostFiles["post-one.mdx"]);
    });
    it("should throw an error if a file is not found", async () => {
      await expect(
        postsApi.getBySlug("post-ihasdofjahoifj", ["slug"])
      ).rejects.toBeInstanceOf(Error);
    });
  });
});
