import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Partners from "../Partners";
import Service from "../Service";
import About from "./About";
import Blog from "./Blog";
import ContactUs from "./ContactUs";
import Hero from "./Hero";
import JoinTeam from "../JoinTeam";
import Vendor from "../Vendor";

const LandingPage = () => {
    return (
        <Box>
            <Hero />
            <Service />
            <About />
            <Partners />
            <Vendor />
            <ContactUs />
            <Blog />
            <JoinTeam />
        </Box>
    );
};

export default LandingPage;
