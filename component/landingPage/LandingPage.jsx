import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Partners from "../PartnersHome";
import Service from "../Service";
import About from "./About";
import Blog from "./Blog";
import ContactUs from "./ContactUs";
import Hero from "./Hero";
import JoinTeam from "../JoinTeam";

const LandingPage = () => {
    return (
        <Box>
            <Hero />
            <Service />
            <About />
            <Partners />
            <ContactUs />
            <Blog />
            <JoinTeam />
        </Box>
    );
};

export default LandingPage;
