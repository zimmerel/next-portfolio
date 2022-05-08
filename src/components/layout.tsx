import { Container, Box, Divider } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Footer from './Footer';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Container maxW="container.sm">
      <Box as="main" mt={6} mb={12}>
        {children}
      </Box>
      <Divider />
      <Footer />
    </Container>
  );
}
