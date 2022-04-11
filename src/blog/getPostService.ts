import path from "path";
import fs from "fs";
import matter from "gray-matter";
import blogConfig from "./blog.config";
import PostService from "./PostService";

/**
 * Get a new post service instance
 */
export default function getPostService(): PostService {
  return new PostService({
    directory: blogConfig.postsDirectory,
    fs,
    path,
    parse: matter,
  });
}
