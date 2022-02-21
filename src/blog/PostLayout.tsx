import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PostLayout({ children }: Props) {
  return <Box>{children}</Box>;
}
