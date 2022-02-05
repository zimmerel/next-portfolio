import { Box, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zach&apos;s Portfolio</title>
        <meta name="description" content="Zach Riel's Portfolio App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main">
        <Heading>
          Zach&apos;s Portfolio
        </Heading>
      </Box>
    </>
  )
}

export default Home
