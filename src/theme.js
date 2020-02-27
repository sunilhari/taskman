import { theme } from "@chakra-ui/core";

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: { ...theme.colors.twitter }
  }
};

console.log(theme);
export { customTheme };
