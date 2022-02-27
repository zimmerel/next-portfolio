import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useBreakpointValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export type BreadcrumbData = {
  text: string;
  href: string;
};

const transformText = (text: string) => {
  return text.replace(/-/g, " ").replace(/_/g, " ");
};

export function useBreadcrumbs() {
  const { asPath } = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbData[]>([]);

  useEffect(() => {
    if (asPath === "/") {
      setBreadcrumbs([]);
      return;
    }
    const linkPath = asPath.split("/");
    linkPath.shift();

    const pathArray = linkPath.map((path, i) => ({
      text: path,
      href: `/${linkPath.slice(0, i + 1).join("/")}`,
    }));

    setBreadcrumbs(pathArray);
  }, [asPath]);

  return {
    breadcrumbs,
    asPath,
  };
}

export interface RouteBreadcrumbProps {
  transform?: (text: string) => string;
}

/**
 * Chakra Breadcrumbs dynamically rendered from router
 */
export default function RouteBreadcrumb({
  transform = transformText,
}: RouteBreadcrumbProps) {
  const { breadcrumbs, asPath } = useBreadcrumbs();

  const responsiveBreadcrumbs = useBreakpointValue({
    base: breadcrumbs.slice(-2),
    md: breadcrumbs,
  });

  return (
    <Breadcrumb fontWeight="medium">
      <BreadcrumbItem>
        <NextLink href="/" passHref>
          <BreadcrumbLink isCurrentPage={asPath === "/"}>Home</BreadcrumbLink>
        </NextLink>
      </BreadcrumbItem>
      {responsiveBreadcrumbs?.map(({ text, href }) => (
        <BreadcrumbItem key={href}>
          <NextLink href={href} passHref>
            <BreadcrumbLink
              textTransform="capitalize"
              isCurrentPage={href === asPath}
            >
              {transform(text)}
            </BreadcrumbLink>
          </NextLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
