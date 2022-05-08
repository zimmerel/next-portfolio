import { Flex, Heading } from '@chakra-ui/react';

export default function Error500() {
  return (
    <Flex
      _dark={{ color: 'white' }}
      alignItems="center"
      gap={3}
      height="50px"
      justify="center"
    >
      <Heading as="h4" size="md">
        There was a problem
      </Heading>
    </Flex>
  );
}
