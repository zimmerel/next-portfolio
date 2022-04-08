import { jest } from "@jest/globals";
import fs from "fs";
import matter from "gray-matter";
import { PostsApi } from "./posts-api";

jest.mock("fs");
jest.mock("path");
jest.mock("gray-matter");

describe("PostsApi", () => {
  const mockFileInfo: Record<string, string> = {
    "/fake/posts/post-one.md": "# heading",
    "/fake/posts/post-two.md": "## heading",
    "/fake/posts/post-three.md": "# heading",
  };
  const fakePostsDirectory = "dir/posts/";
  const fakePostFiles: Record<string, string> = {
    "post-one.md": "# heading",
    "post-two.md": "## heading",
    "post-three.md": "# heading",
  };

  const fakeMatterData = {
    title: "Test",
    author: "Zach",
    date: new Date().toISOString(),
  };
  let postsApi: PostsApi;
  const mockReaddir = jest.fn((input: string) => Object.keys(fakePostFiles));
  const mockReadFile = jest.fn((input: string) => {
    const fileName = input.split("/").at(-1) ?? "";
    const fileContents = fakePostFiles[fileName];
    if (!fileContents) {
      throw new Error(`ENOENT: no such file or directory, open '${input}'`);
    }
    return fileContents;
  });
  const mockMatter = jest.fn((input: string) => ({
    data: fakeMatterData,
    content: input,
  }));

  beforeEach(() => {
    mockReaddir.mockClear();
    mockReadFile.mockClear();
    mockMatter.mockClear();

    postsApi = new PostsApi(fakePostsDirectory);
  });

  describe("postsApi.getSlugs()", () => {
    it("should get list of file names in postsDirectory", () => {
      fs.readdirSync as jest.MockedFunction<typeof fs.readdirSync>
      fs.readdirSync
      if (jest.isMockFunction(fs.readdirSync)) {
        (
          
        ).mockReturnValue("");
      }
      const slugs = postsApi.getSlugs();
      expect(slugs).toStrictEqual(Object.keys(fakePostFiles));
      expect(mockReaddir).toBeCalledWith(fakePostsDirectory);
    });
  });

  describe("postsApi.getBySlug()", () => {
    it("should get post data from slug with or without extension", () => {
      const slugs = ["post-one", "post-one.md"];
      const posts = slugs.map((slug) => postsApi.getBySlug(slug, ["content"]));
      expect(posts[0]).toBeTruthy();
      expect(posts[0]).toStrictEqual(posts[1]);
    });
    it("should only get specified fields", () => {
      const post = postsApi.getBySlug("post-one", ["title", "date"]);
      expect(Object.keys(post)).toStrictEqual(["title", "date"]);
    });
    it("should use matter function to parse frontmatter", () => {
      postsApi.getBySlug("post-one", ["title", "date"]);
      expect(mockMatter).toHaveBeenCalledWith(fakePostFiles["post-one.mdx"]);
    });
    it("should compile content when content field is specified", () => {
      const post = postsApi.getBySlug("post-one", ["content"]);
      expect(post.content).toBeTruthy();
      expect(mockCompile).toHaveBeenCalledWith(fakePostFiles["post-one.mdx"]);
    });
    it("should throw an error if a file is not found", () => {
      expect(
        postsApi.getBySlug("post-ihasdofjahoifj", ["slug"])
      ).rejects.toBeInstanceOf(Error);
    });
  });
});
