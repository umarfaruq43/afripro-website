import { Box, Button, Flex, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ScreenWidth from "../../Layout/ScreenWidth";
import NewsCard from "../NewsCard";

const LatestNews = ({ news }) => {
    const [numberOfBlogs, setNumberOfBlogs] = useState(4);
    const [end, setEnd] = useState("");
    // let LoadMore
    const handleMoreBlogs = () => {
        if (news && numberOfBlogs < news.length) {
            setNumberOfBlogs(numberOfBlogs + 2);
        } else {
            setEnd("End of Blogs");
        }
    };
    return (
        <Box py={["40px", null, "80px"]}>
            <ScreenWidth>
                <Box>
                    <Text
                        align="justify"
                        fontSize={["4l", null, "4xl"]}
                        fontWeight={["700", null, "400"]}
                    >
                        Latest
                    </Text>
                    {/* News ======>> */}
                    <Box pt="40px">
                        <SimpleGrid columns={[1, 2]} gap="40px">
                            {
                                news &&
                                    news
                                        .slice(0, numberOfBlogs)
                                        .map(
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
                                                        title={title}
                                                        slug={slug}
                                                        created_at={created_at}
                                                    />
                                                );
                                            }
                                        )

                                //
                            }
                        </SimpleGrid>
                    </Box>

                    <Box mt="64px" textAlign="center">
                        <Button
                            onClick={handleMoreBlogs}
                            bgColor="brand.veryDeepBlue"
                            color="brand.white"
                            px="32px"
                            py="11px"
                            _active={{ bg: "brand.veryDeepBlue" }}
                            _focus={{ bg: "brand.veryDeepBlue" }}
                            _hover={{ bg: "brand.veryDeepBlue" }}
                        >
                            {end == "" ? "Load More" : end}
                        </Button>
                    </Box>
                    {/* <Flex mt="40px" justify="space-between">
                        <Flex
                            cursor="pointer"
                            align="center"
                            fontSize="14px"
                            fontWeight="400"
                            color="brand.blue"
                        >
                            <Icon as={BsArrowLeft} mr="11.5px" />
                            <Text align="justify">Older entries</Text>
                        </Flex>

                        <Flex
                            cursor="pointer"
                            align="center"
                            fontSize="14px"
                            fontWeight="400"
                            color="brand.blue"
                        >
                            <Text align="justify">Next entries</Text>
                            <Icon as={BsArrowRight} ml="11.5px" />
                        </Flex>
                    </Flex> */}
                </Box>
            </ScreenWidth>
        </Box>
    );
};

export default LatestNews;
