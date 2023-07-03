import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import Policy from "../component/Policy";
import Hero from "../component/policy/Hero";
import Layout from "../Layout/Layout";
import ScreenWidth from "../Layout/ScreenWidth";
const policy = () => {
    return (
        <Layout title={"Contact Page"}>
            <Hero />
            <ScreenWidth py="40px">
              <Policy />
            </ScreenWidth>
        </Layout>
    );
};

export default policy;
