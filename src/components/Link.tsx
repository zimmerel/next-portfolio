import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

export type LinkProps = Omit<NextLinkProps, 'passHref'> &
  Omit<ChakraLinkProps, 'href'>;

/**
 * Composed themed next link.
 */
export default function Link({
  as,
  href,
  locale,
  prefetch,
  replace,
  scroll,
  shallow,
  ...props
}: LinkProps) {
  return (
    <NextLink
      as={as}
      href={href}
      locale={locale}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref
    >
      <ChakraLink {...props} />
    </NextLink>
  );
}
