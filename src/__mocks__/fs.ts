import { PathLike } from "fs";
import path from "path";

export type SetMockFiles = (files: Record<string, string>) => void;

type FsMock = typeof import("fs/promises") & {
  __setMockFiles: SetMockFiles;
};

const fs: FsMock = jest.createMockFromModule("fs/promises");

let mockFiles = Object.create(null);

fs.__setMockFiles = (newMockFiles: Record<string, string>) => {
  mockFiles = Object.create(null);
  for (const file in newMockFiles) {
    const dir = path.dirname(file);

    if (!mockFiles[dir]) {
      mockFiles[dir] = [];
    }
    mockFiles[dir].push(path.basename(file));
  }
};

fs.readdir = async (path) => {
  return mockFiles[path.toString()] || [];
};

export default fs;
