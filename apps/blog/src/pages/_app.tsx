import type { AppProps } from 'next/app';
import { Layout } from '@zmrl/portfolio-common';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
