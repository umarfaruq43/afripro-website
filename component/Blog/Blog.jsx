import { Box } from "@chakra-ui/react";
import React from "react";
import Hero from "./Hero";
import Layout from "../../Layout/Layout";
import LatestNews from "./LatestNews";

const Blog = ({news}) => {
    return (
        <Layout>
            <Hero />
            <LatestNews news={news} />
        </Layout>
    );
};

export default Blog;
