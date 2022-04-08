import { Divider, Flex, Heading } from "@chakra-ui/react";

export default function Error404() {
  return (
    <Flex
      _dark={{ color: "white" }}
      alignItems="center"
      gap={3}
      height="50px"
      justify="center"
    >
      <Heading as="h2" size="xl">
        404
      </Heading>
      <Divider orientation="vertical" />
      <Heading as="h4" size="md">
        Page Not Found
      </Heading>
    </Flex>
  );
}
