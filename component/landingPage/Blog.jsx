import { Box, Flex, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ScreenWidth from "../../Layout/ScreenWidth";
import { ButtonOutline } from "../Buttons";
import NewsCard from "../NewsCard";

const Blog = () => {
    const [news, setNews] = useState(null);
    useEffect(() => {
        fetch("https://admin.afripro.co.tz/api/recent-blog")
            .then((res) => res.json())
            .then((data) => setNews(data));
    }, []);

    console.log(news);
    return (
        <Box py="80px">
            <ScreenWidth>
                <Box>
                    <Box>
                        <Text
                            align="justify"
                            color="brand.orange"
                            fontWeight="500"
                            fontSize={["14px", null, "20px"]}
                        >
                            Blog
                        </Text>

                        <Text
                            align="justify"
                            color="brand.blue"
                            fontWeight="500"
                            fontSize={["24px", null, "36px"]}
                        >
                            Latest
                        </Text>
                    </Box>
                    <Box mt="40px">
                        <SimpleGrid minChildWidth="250px" gap="40px">
                            {news &&
                                news.recent_blogs.map(
                                    ({
                                        photo_name,
                                        created_at,
                                        title,
                                        id,
                                        slug,
                                    }) => {
                                        return (
                                            <NewsCard
                                                key={id}
                                                id={id}
                                                photo_name={photo_name}
                                                created_at={created_at}
                                                slug={slug}
                                                title={title}
                                            />
                                        );
                                    }
                                )}
                        </SimpleGrid>
                    </Box>
                    <Box mt="40px" textAlign={["center", null, "right"]}>
                        <Link href="/blog" _hover={{ textDecoration: "none" }}>
                            <ButtonOutline
                                text="SEE MORE"
                                maxWidth="156px"
                                blue={true}
                                icon="arrow"
                            />
                        </Link>
                    </Box>
                </Box>
            </ScreenWidth>
        </Box>
    );
};

export default Blog;
