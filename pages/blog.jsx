import { Box } from "@chakra-ui/react";
import React from "react";
import Blog from "../component/Blog/Blog";

const blog = ({ news }) => {
    return (
        <Box>
            <Blog news={news} />
        </Box>
    );
};

// This gets called on every request
export async function getServerSideProps(context) {
    // Fetch data from external API
    const res = await fetch(`https://admin.afripro.co.tz/api/blog`);
    let data = await res.json();

    let news = data.blogs;

    // Pass data to the page via props
    return { props: { news } };
}

export default blog;
