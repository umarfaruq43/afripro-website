import "../styles/globals.css";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../theme";
import "@fontsource/dm-sans/700.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import Context from "../context/Context";
// import ActiveNav from "../context/Context";
function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Context>
                <CSSReset />
                <Component {...pageProps} />
            </Context>
        </ChakraProvider>
    );
}

export default MyApp;
