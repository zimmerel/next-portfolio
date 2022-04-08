import type { AppProps } from "next/app";
import Chakra from "../src/Chakra";
import Layout from "../src/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
}

export { getServerSideProps } from "../src/Chakra";
