import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  semanticTokens: {
    colors: {
      header: {
        default: "#A1E6FF",
        _dark: "#0A1724",
      },
    },
  },
});

export default theme;
