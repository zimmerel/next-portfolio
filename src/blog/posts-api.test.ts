import fs from "fs/promises";
import { PostsApi } from "./posts-api";

jest.mock("fs/promises");

const readdirMock = fs.readdir as jest.MockedFunction<typeof fs.readdir>;

describe("PostsApi", () => {
  const postsDirectory = "dir/posts/";

  describe("postsApi.getSlugs()", () => {
    it("should get list of files in postsDirectory", () => {
      const fakePostsFileNames = ["file1.mdx", "file2.mqwd", "file3.sq"];
      readdirMock.mockImplementation(async () => fakePostsFileNames);
      const slugs = getPostSlugs();
    });
  });
});
