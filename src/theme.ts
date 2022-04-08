import {
  extendTheme,
  Theme,
  ThemeConfig,
  withDefaultColorScheme,
} from "@chakra-ui/react";

// const fonts: Theme["fonts"] = {
//   body: "Roboto, sans-serif",
//   heading: "Roboto, sans-serif",
//   mono: "Fira Mono, monospace",
// };

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const styles: Theme["styles"] = {
  global: {
    html: {
      boxSizing: "border-box",
    },
    "*, *:before, *:after": {
      boxSizing: "inherit",
    },
  },
};

const theme = extendTheme(withDefaultColorScheme({ colorScheme: "purple" }), {
  config,
  styles,
});

export default theme;
