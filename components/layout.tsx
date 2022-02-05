import { Container, Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode
}

export default function Layout({children}: Props) {
  return (
    <Container>
      <Box as="main">
        {children}
      </Box>
    </Container>
  )
}