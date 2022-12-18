import { extendTheme } from "@chakra-ui/react";

const colors = {
    brand: {
        veryDeepBlue: "#0B2854",
        deepBlue: "#0B2854",
        blue: "#122135",
        lightBlue: "#0E346E",
        dark: "#101E30",
        lightGray: "#414D5D",
        verylightGray: "#606A78",
        orange: "#EE812B",
        white: "#FFFFFF",
        tickwhite: "#FFF9F5",
        dimWhite: "#F6F8FA",
        veryDimWhite: "#E7E9EB",
        borderStroke: "#FFD7B7",
        cardColor: "#0C022F",
    },
};

const theme = extendTheme({
    colors,
    fonts: {
        dmSans: `"DM Sans",sans-serif`,
    },
    fontSizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        xl1: "21px",
        xl2: "22px",
        "2xl": "24px",
        "3xl": "28px",
        "4l": "32px",
        "4xl": "36px",
        "5xl": "45px",
        "6xl": "64px",
    },
});

export default theme;
