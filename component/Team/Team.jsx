import { Box } from "@chakra-ui/react";
import React from "react";
import Ambition from "./Ambition";
import Future from "./Future";
import Hero from "./Hero";

const Team = () => {
    return (
        <Box>
            <Hero />
            <Future />
            <Ambition />
        </Box>
    );
};

export default Team;
