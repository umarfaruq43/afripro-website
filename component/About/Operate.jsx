import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../../Layout/ScreenWidth";

const Operate = () => {
    return (
        <Box id="choose">
            <Box
                py={["64px", null, "96px"]}
                bgImage={[
                    "images/about/operateBgM.svg",
                    null,
                    "images/about/operateBg.svg",
                ]}
                bgPos="center"
                bgSize={["cover", "cover"]}
                bgRepeat="no-repeat"
            >
                <ScreenWidth>
                    <Flex flexDir={["column-reverse", null, "row"]} gap="32px">
                        <Flex
                            w={["100%", null, "50%"]}
                            align="center"
                            justify="center"
                        >
                            <Image
                                src="/images/about/operate.svg"
                                alt=" Afri-Pro Logo Frame"
                                h={["300px", null, "483px"]}
                            />
                        </Flex>

                        <Flex
                            w={["100%", null, "50%"]}
                            align="center"
                            justify="center"
                        >
                            <Box>
                                <Text
                                    align="justify"
                                    fontWeight="700"
                                    mb="8px"
                                    fontSize={["24px", null, "36px"]}
                                >
                                    {" "}
                                    Why Choose{" "}
                                    <Text
                                        align="justify"
                                        as="span"
                                        color="brand.orange"
                                    >
                                        {" "}
                                        Us
                                    </Text>
                                </Text>
                               
                                <Text
                                    align="justify"
                                    maxW={["100%", null, "612px"]}
                                >
                                    Cyber security is all that we do, helping
                                    you secure your information technology
                                    assets and protecting your business is our
                                    priority. We are a team of highly dedicated
                                    security specialists, powered by strategic
                                    and emerging security vendor partners,
                                    helping us fully focus on protecting our
                                    clients across different verticals and
                                    industries.
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                </ScreenWidth>
            </Box>
        </Box>
    );
};

export default Operate;
