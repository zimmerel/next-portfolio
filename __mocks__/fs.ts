import type { PathOrFileDescriptor } from "fs";
import path from "path";

export type MockFS = typeof import("fs") & {
  __setMockFiles: typeof __setMockFiles;
  readdirSync: typeof readdirSync;
};

type MockDirectory = Record<string, string>;

const fs: MockFS = jest.createMockFromModule("fs");

const mockFiles = new Map<string, MockDirectory>();

function __setMockFiles(newFiles: Record<string, string>) {
  mockFiles.clear();
  for (const file in newFiles) {
    const dir = path.dirname(file);
    const base = path.basename(file);

    const mockDir = mockFiles.get(dir) ?? {};
    mockDir[base] = newFiles[file];

    mockFiles.set(dir, mockDir);
  }
}

function readdirSync(directoryPath: string): string[] {
  return Object.keys(mockFiles.get(directoryPath) ?? {});
}

function readFileSync(filePath: string, options: BufferEncoding) {
  const dir = path.dirname(filePath);
  const base = path.basename(filePath);

  const mockDir = mockFiles.get(dir) ?? {};

  return mockDir[base];
}

fs.__setMockFiles = __setMockFiles;
fs.readdirSync = readdirSync as typeof fs.readdirSync;
fs.readFileSync = readFileSync as typeof fs.readFileSync;

export default fs;
