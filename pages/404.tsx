import { Divider, Flex, Heading } from "@chakra-ui/react";

export default function Error404() {
  return (
    <Flex
      justify="center"
      alignItems="center"
      gap={3}
      height="50px"
      _dark={{ color: "white" }}
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
