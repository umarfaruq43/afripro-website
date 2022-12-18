import { Box } from "@chakra-ui/react";
import React from "react";
import Layout from "../../Layout/Layout";
import Content from "./Content";
import Hero from "./Hero";
const Service = () => {
    return (
        <Layout>
            <Box>
                <Hero />
                <Content />
            </Box>
        </Layout>
    );
};

export default Service;
