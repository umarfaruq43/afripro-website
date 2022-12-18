import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../../Layout/ScreenWidth";

const WhoWeAre = () => {
    return (
        <Box
            py="96px"
            bgImage={[
                "images/about/MWhoBackground.svg",
                null,
                "images/about/WhoBackground.svg",
            ]}
            bgPos="center"
            bgSize={["cover", "cover"]}
            bgRepeat="no-repeat"
        >
            <ScreenWidth>
                <Flex flexDir={["column", null, "row"]} gap="32px">
                    <Flex
                        w={["100%", null, "50%"]}
                        align="center"
                        justify="center"
                    >
                        <Box>
                            <Text
                                align="justify"
                                fontWeight="700"
                                mb={["16px", null, "24px"]}
                                fontSize={["24px", null, "36px"]}
                            >
                                {" "}
                                Who we are
                            </Text>
                            <Box maxW={["100%", null, "415px"]}>
                                <Text align="justify">
                                    Afri-Pro Services Ltd is a technology
                                    oriented professional services firm fully
                                    focused on delivering expert cybersecurity
                                    and digital services to clients of different
                                    sizes across various industries.
                                </Text>
                                <Text align="justify">
                                    Our industry leading team of experienced
                                    consultants deliver end-to-end cyber
                                    capabilities, either as bespoke engagements
                                    customized to client’s specific needs or as
                                    fully-managed services. Our capabilities
                                    comprise a full suite of cyber security
                                    services, all focussed on improving our
                                    clients’ cyber resilience, and ultimately
                                    enabling them to protect their business and
                                    withstand, cyber-attacks.
                                </Text>

                                <Text align="justify">
                                    As a provider of advanced cyber security
                                    services, we are fully focussed on
                                    delivering expert services of world class
                                    standards to meet our client satisfaction.
                                    We believe that by focussing on our core
                                    business, our clients benefit from levels of
                                    agility, expertise, and quality that
                                    wouldn’t be delivered from larger,
                                    generalist, service providers and
                                    consultancy houses, to whom cyber security
                                    is viewed as a supplementary revenue stream.
                                </Text>
                            </Box>
                        </Box>
                    </Flex>
                    <Flex
                        w={["100%", null, "50%"]}
                        align="center"
                        justify="center"
                    >
                        <Image
                            src="/images/about/logoFrame.svg"
                            alt=" Afripro Logo Frame"
                        />
                    </Flex>
                </Flex>
            </ScreenWidth>
        </Box>
    );
};

export default WhoWeAre;
