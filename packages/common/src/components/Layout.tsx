import type { ReactNode } from 'react';
import Footer from './Footer';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
