import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function BlogLayout({ children }: Props) {
  return <Box>{children}</Box>;
}
