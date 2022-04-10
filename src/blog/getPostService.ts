import path from "path";
import fs from "fs";
import matter from "gray-matter";
import blogConfig from "./blog.config";
import PostService from "./PostService";

/**
 *
 * @returns a new {PostService} instance
 */
export default function getPostService() {
  return new PostService({
    directory: blogConfig.postsDirectory,
    fs,
    path,
    parse: matter,
  });
}
