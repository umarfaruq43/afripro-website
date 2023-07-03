import { Box } from "@chakra-ui/react";
import React from "react";
import Hero from "./Hero";
import ContactUs from "../landingPage/ContactUs";
import Map from "./Map";
import Partners from "../Partners";
import JoinTeam from "../JoinTeam";

const Contact = () => {
    return (
        <Box>
            <Hero />
            <ContactUs />
            <Map />
            
            <JoinTeam />
        </Box>
    );
};

export default Contact;
