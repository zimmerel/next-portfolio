import {
  extendTheme,
  Theme,
  ThemeConfig,
  theme as baseTheme,
} from "@chakra-ui/react";
import styles from "./styles";

const fonts: Theme["fonts"] = {
  ...baseTheme.fonts,
  mono: "Fira Code, monospace",
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  fonts,
  config,
  styles,
});

export default theme;
