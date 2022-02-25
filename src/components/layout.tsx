import { Container, Box, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import Header from "./Header";
import RouteBreadcrumb from "./RouteBreadcrumb";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Container maxW="container.md">
      <Header />
      <Box as="main" mt={3}>
        {children}
      </Box>
    </Container>
  );
}
