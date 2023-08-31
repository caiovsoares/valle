import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  global: {
    body: {
      w: "100%",
      color: "red",
    },
  },
  semanticTokens: {
    colors: {
      header: {
        default: "#54D1FF",
        _dark: "#0A1724",
      },
      hoverButton: {
        default: "#43A8D0",
        _dark: "#173857",
      },
      borderColor: {
        default: "gray.200",
        _dark: "gray.600",
      },
      transparentCard:{
        default: "blackAlpha.300",
        _dark: "whiteAlpha.200",
      }
    },
  },
});

export default theme;
