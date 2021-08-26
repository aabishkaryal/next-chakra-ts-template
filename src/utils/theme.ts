import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import { createBreakpoints } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

const breakpoints = createBreakpoints({
    sm: "20em", // 320px
    md: "30em", // 480px
    lg: "48em", // 768px
    xl: "64em", // 1024px
    "2xl": "75em", // 1200px
});

const theme = extendTheme({ config, breakpoints });

export default theme;
