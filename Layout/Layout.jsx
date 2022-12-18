import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../component/Footer";
import LandingPage from "../component/landingPage/LandingPage";
import Navbar from "../component/Navbar";

const Layout = ({ children, title }) => {
    const [navbarColor, setNavbarColor] = useState(false);

    // navbar scroll changeBackground function
    const changeBackground = () => {
        if (window.scrollY >= 170) {
            setNavbarColor(true);
        } else {
            setNavbarColor(false);
        }
    };

    useEffect(() => {
        // adding the event when scroll change
        window.addEventListener("scroll", changeBackground);
        localStorage.setItem("chakra-ui-color-mode", "light");
        const color = localStorage.getItem("chakra-ui-color-mode");
        console.log(color);
    });
    return (
        <Box overflowX="hidden">
            <Head>
                <title>{title}</title>
                <meta name="description" content="Afripro" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box fontFamily="dmSans">
                <Navbar navbarColor={navbarColor} />
                <Box>{children}</Box>
                <Footer />
            </Box>
        </Box>
    );
};

export default Layout;
