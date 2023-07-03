import { Box } from "@chakra-ui/react";
import React from "react";
import Department from "./Department";
import Hero from "./Hero";
import Operate from "./Operate";
import Report from "./Report";
import Team from "./Team";
import WhoWeAre from "./WhoWeAre";
import Partners from "../Partners";
import JoinTeam from "../JoinTeam";
import Vendor from "../Vendor";

const About = () => {
    return (
        <Box>
            <Hero />
            <WhoWeAre />
            <Operate />
            <Team />
            <Partners />
            <Vendor />
            <JoinTeam />
        </Box>
    );
};

export default About;
