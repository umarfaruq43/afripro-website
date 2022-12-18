import { Box, Flex, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import ScreenWidth from "../../Layout/ScreenWidth";
import { ButtonFill, ButtonOutline } from "../Buttons";

const About = () => {
    const navigate = useRouter();
    return (
        <Box
            mt="44"
            bgColor="brand.lightBlue"
            borderRadius="8"
            bgImage={["/images/aboutBgM.svg", null, "/images/aboutBg.svg"]}
            bgRepeat="no-repeat"
            bgSize="cover"
            //     minH="703"
        >
            <ScreenWidth>
                <Flex
                    py="183px"
                    justify="space-between"
                    flexDir={["column-reverse", null, "row"]}
                    //     gap="14"
                >
                    <Flex
                        w={["100%", null, "70%"]}
                        justify={"center"}
                        align="center"
                    >
                        <Box color="brand.white" maxW="688">
                            <Text
                                align="justify"
                                fontSize={["36px"]}
                                fontWeight="700"
                            >
                                About us
                            </Text>
                            <Text
                                color="brand.orange"
                                fontWeight="500"
                                fontSize={"20px"}
                                mt="2"
                            >
                                Specialized in the delivery of world-class
                                Cybersecurity
                            </Text>
                            <Text
                                align="justify"
                                mt="6"
                                fontSize={["md", null, "lg"]}
                                fontWeight="400"
                                maxW="688px"
                            >
                                Cyber security is all that we do, helping you
                                secure your information technology assets and
                                protecting your business is our priority. We are
                                a team of highly dedicated security specialists,
                                powered by strategic and emerging security
                                vendor partners, helping us fully focus on
                                protecting our clients across different
                                verticals and industries.
                            </Text>
                            {/* <SimpleGrid
                                minChildWidth="157px"
                                spacing={["4", "8"]}
                                mt="5"
                            > */}
                            <Flex gap="32px" mt="10">
                                <ButtonFill
                                    text="CONTACT US"
                                    blue={false}
                                    fontSize="16px"
                                    style={{ width: "147px", height: "45px" }}
                                    onClick={() => navigate.push("/contact")}
                                />
                                <ButtonOutline
                                    text="MEET THE TEAM"
                                    fontSize="16px"
                                    style={{ width: "147px", height: "45px" }}
                                    onClick={() => navigate.push("/team")}
                                />
                            </Flex>
                            {/* </SimpleGrid> */}
                        </Box>
                    </Flex>
                    <Flex w={["100%", null, "auto"]}>
                        <Image
                            src="/images/about/aboutUs.svg"
                            alt="Image about Afri-Pro"
                            w="100%"
                        />
                    </Flex>
                </Flex>
            </ScreenWidth>
        </Box>
    );
};

export default About;

// queen, Lizzy01;
