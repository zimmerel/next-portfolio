import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import type { Styles } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
} as const;

const styles: Styles = {
  global: () => ({
    html: {
      boxSizing: "border-box",
    },
    "*, *:before, *:after": {
      boxSizing: "inherit",
    },
  }),
};

const theme = extendTheme({ config, styles });

export default theme;
