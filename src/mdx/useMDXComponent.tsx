import { run } from "@mdx-js/mdx";
import type { MDXContent, MDXModule } from "mdx/types";
import { useEffect, useState } from "react";
import _jsx_runtime from "react/jsx-runtime";

type FileLike = { toString(): string };

const DefaultContent = () => <></>;

export default function useMDXComponent(file: FileLike): MDXContent {
  const [mdxModule, setMdxModule] = useState<MDXModule>();

  useEffect(() => {
    run(file, _jsx_runtime).then((module) => {
      setMdxModule(module);
    });
  }, [file]);

  return mdxModule?.default ?? DefaultContent;
}
