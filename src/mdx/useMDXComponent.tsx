import { run } from "@mdx-js/mdx";
import { MDXContent, MDXModule } from "mdx/types";
import { useEffect, useState } from "react";
import _jsx_runtime from "react/jsx-runtime";

type FileLike = { toString(): string };

const DefaultContent = () => <></>;

export default function useMDXComponent<T>(file: FileLike): MDXContent {
  const [mdxModule, setMdxModule] = useState<MDXModule & T>();

  useEffect(() => {
    (async () => {
      const module = await run(file, _jsx_runtime);
      setMdxModule(module);
    })();
  }, [file]);

  return mdxModule?.default ?? DefaultContent;
}
