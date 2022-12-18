import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../../Layout/ScreenWidth";

const Operate = () => {
    return (
        <Box>
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
                                alt=" Afripro Logo Frame"
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
                                    How we{" "}
                                    <Text
                                        align="justify"
                                        as="span"
                                        color="brand.orange"
                                    >
                                        {" "}
                                        operate
                                    </Text>
                                </Text>
                                <Text
                                    align="justify"
                                    fontWeight="500"
                                    mb={["16px", null, "24px"]}
                                    fontSize="22px"
                                >
                                    {" "}
                                    Our Assessment Report
                                </Text>
                                <Text
                                    align="justify"
                                    maxW={["100%", null, "415px"]}
                                >
                                    All our Security assessment project is
                                    accompanied with a comprehensively
                                    documented report that shows the findings;
                                    detailing the description of the
                                    vulnerabilities identified, the consequences
                                    of the vulnerabilities if exploited, our
                                    recommendation for closing the gaps, and
                                    evidence of the exploitation of the
                                    vulnerabilities identified. Our report is
                                    addressed to 3 relevant stakeholders’ levels
                                    within your organization.
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
