import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useBreakpointValue,
} from "@chakra-ui/react";
import { CSSProperties } from "@emotion/serialize";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export type BreadcrumbData = {
  text: string;
  href: string;
};

const transformText = (text: string) => text.replace(/[-_]/g, " ");

export function useBreadcrumbs(asPath: string) {
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

  return breadcrumbs;
}

export interface RouteBreadcrumbProps {
  /**
   * Transform function applied to route pathname before
   * it is displayed in breadcrumb.
   */
  transform?: (text: string) => string;
  /**
   * `text-transform` css property applied to breadcrumbs
   */
  textTransform?: CSSProperties["textTransform"];
}

/**
 * Chakra Breadcrumbs dynamically rendered from router
 */
export default function RouteBreadcrumb({
  transform = transformText,
  textTransform = "capitalize",
}: RouteBreadcrumbProps) {
  const { asPath } = useRouter();
  const breadcrumbs = useBreadcrumbs(asPath);

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
              textTransform={textTransform}
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
