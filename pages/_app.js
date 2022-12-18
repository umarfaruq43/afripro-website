import "../styles/globals.css";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../theme";
import "@fontsource/dm-sans/700.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <CSSReset />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
