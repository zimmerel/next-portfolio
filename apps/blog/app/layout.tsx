import * as fonts from 'fonts';
import type { ReactNode } from 'react';
import { Layout } from 'ui';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={fonts.inter.className}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
