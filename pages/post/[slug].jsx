import React, { useEffect, useState } from "react";
import { Box, Divider, Flex, Image, Link, Text } from "@chakra-ui/react";
import Hero from "../../component/Blog/Hero";
import Layout from "../../Layout/Layout";
import ScreenWidth from "../../Layout/ScreenWidth";
import { ButtonFill } from "../../component/Buttons";
import { useRouter } from "next/router";

const FullNews = (props) => {
    const { mainPosts } = props;
    console.log(mainPosts);
    const router = useRouter();
    const [others, setOthers] = useState(null);
    const [content, setContent] = useState(null);

    useEffect(() => {
        fetch("https://demoafriproadmin.statainsight.com/api/other-blog")
            .then((res) => res.json())
            .then((data) => data && setOthers(data.other_blogs));
    }, []);

    return (
        <Layout>
            <Hero />
            <ScreenWidth>
                <Flex mt="80px" gap="32px" flexDir={["column", null, "row"]}>
                    <Box maxW={["100%", null, "672px"]}>
                        {/* Seting the blog content into the page directly  */}

                        <div
                            dangerouslySetInnerHTML={{
                                __html: mainPosts && mainPosts.content,
                            }}
                        ></div>
                    </Box>
                    <Box mb="40px">
                        <Text
                            align="justify"
                            fontWeight="700"
                            fontSize="18px"
                            color="brand.orange"
                        >
                            Other Blog Post
                        </Text>

                        <Divider my="16px" />
                        {others &&
                            others
                                .slice(0, 3)
                                .map(
                                    ({
                                        photo_name,
                                        created_at,
                                        title,
                                        slug,
                                        id,
                                    }) => {
                                        return (
                                            <ReadCard
                                                key={id}
                                                id={id}
                                                photo_name={photo_name}
                                                created_at={created_at}
                                                title={title}
                                                slug={slug}
                                            />
                                        );
                                    }
                                )}
                    </Box>
                </Flex>
            </ScreenWidth>
        </Layout>
    );
};

export default FullNews;

const ReadCard = ({ photo_name, created_at, title, slug, id }) => {
    //    Function to Format the date => created_at..
    var monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    var newdate;
    var dateObj = new Date(created_at);
    var month = dateObj.getUTCMonth(); //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    //     formated Date

    let newDate = monthNames[month] + " " + day + ", " + year;
    return (
        <Box
            maxW={["100%", null, "420px"]}
            minW={["100%", "220px", "320px"]}
            mt="40px"
            mx={["auto", null, "0"]}
            w={["100%"]}
            px={["20px", null, "20px"]}
            pt="32px"
            pb="40px"
            boxShadow="0px 6px 12px rgba(24, 39, 75, 0.12)"
            bg="brand.white"
        >
            <Box>
                <Text
                    align="justify"
                    fontSize="14px"
                    fontWeight="400"
                    color="brand.verylightGray"
                >
                    {newDate}
                </Text>
                <Text
                    align="justify"
                    color="brand.blue"
                    fontSize={["16px", null, "20px"]}
                    mt="16px"
                    fontWeight="500"
                    noOfLines="3"
                >
                    {title}
                </Text>
                <Link
                    href={`${slug}`}
                    mt="32px"
                    display="inline-block"
                    color="brand.orange"
                    fontSize={["14px"]}
                    fontWeight="700"
                >
                    READ MORE
                </Link>
            </Box>
        </Box>
    );
};

// Generate static paths
export async function getStaticPaths() {
    const res = await fetch(
        "https://demoafriproadmin.statainsight.com/api/blog"
    );

    const posts = await res.json();

    const paths = posts.blogs.map((post) => ({
        params: { slug: post.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

// // // Generate static props

export async function getStaticProps({ params }) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    let mainPosts;
    const res = await fetch(
        "https://demoafriproadmin.statainsight.com/api/blog"
    );
    const posts = await res.json();
    let postData = posts.blogs;
    postData.map((p) => {
        if (p.slug === params.slug) {
            mainPosts = p;
            return;
        }
    });

    return {
        props: {
            mainPosts,
        },
    };
}
