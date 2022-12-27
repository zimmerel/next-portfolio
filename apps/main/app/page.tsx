import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zach&apos;s Stuff</title>
        <meta name="description" content="Portfolio by Zach Riel" />
      </Head>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <h1>Hi, I am Zach</h1>
          <p>
            I like to write code and solve problems. This site is to share my
            work and thoughts.
          </p>
        </div>
      </div>
    </>
  );
}
