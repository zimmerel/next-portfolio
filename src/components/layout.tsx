import { Container, Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Header from "./Header";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Container maxW="container.md">
      <Header />
      <Box as="main" m="2">
        {children}
      </Box>
    </Container>
  );
}
