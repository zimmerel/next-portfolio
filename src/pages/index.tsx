import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zach&apos;s Stuff</title>
        <meta
          name="description"
          content="Portfolio of Zach Riel. Created with Next.js and ChakraUI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box display="flex" justifyContent="space-between">
        <Flex direction="column" gap={2}>
          <Heading>Hi, I am Zach</Heading>
          <Text>
            I like to write code and solve problems. This site is to share my
            work and thoughts.
          </Text>
        </Flex>
      </Box>
    </>
  );
}
