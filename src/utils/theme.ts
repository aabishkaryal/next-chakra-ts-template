import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import { createBreakpoints } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

const breakpoints = createBreakpoints({
    sm: "20rem", // 320px
    md: "30rem", // 480px
    lg: "48rem", // 768px
    xl: "64rem", // 1024px
    "2xl": "75rem", // 1200px
});

const theme = extendTheme({ config, breakpoints });

export default theme;
