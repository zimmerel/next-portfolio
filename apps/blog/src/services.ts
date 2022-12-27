import fs from 'fs';
import path from 'path';
import { createPostService } from './post-service';

const postsDir = path.join(process.cwd(), '_posts');

export const postService = createPostService({
  directory: postsDir,
  fs,
});
