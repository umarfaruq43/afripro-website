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

const About = () => {
    return (
        <Box>
            <Hero />
            <WhoWeAre />
            <Operate />
            {/* <Department /> */}
            {/* <Report /> */}
            <Team />
            <Partners />
            <JoinTeam />
        </Box>
    );
};

export default About;
