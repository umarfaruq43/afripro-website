import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../../Layout/ScreenWidth";

const Department = () => {
    return (
        <Box
            py={["64px", null, "94px"]}
            bgImage="images/about/departmentBg.png"
            bgPos="center"
            bgSize={["contain", "contain"]}
            bgRepeat="no-repeat"
        >
            <ScreenWidth>
                <Box>
                    <Text
                        align="justify"
                        textAlign="center"
                        fontSize={["2xl", null, "4l"]}
                        fontWeight="700"
                    >
                        Our{" "}
                        <Text align="justify" as="span" color="brand.orange">
                            Departments
                        </Text>
                    </Text>

                    {/* Colum Section */}

                    <Flex
                        mt={["32px", null, "40px"]}
                        gap="56px"
                        flexDir={["column", null, "row"]}
                        justify="space-between"
                    >
                        <Box
                            maxW="484px"
                            mx={["auto", null, "0"]}
                            w={["100%", null, "50%"]}
                            px={["20px", null, "32px"]}
                            pt="32px"
                            pb="40px"
                            boxShadow="0px 6px 12px rgba(24, 39, 75, 0.12)"
                            bg="brand.white"
                        >
                            <Text
                                align="justify"
                                fontWeight="700"
                                fontSize="18px"
                                color="brand.lightGray"
                                mb="16px"
                            >
                                Executive Management
                            </Text>
                            <Text
                                align="justify"
                                fontSize={["md", null, "lg"]}
                                color="brand.verylightGray"
                            >
                                This section of our report is aimed at decision
                                makers within an organization who need to
                                understand the overall security posture of an
                                organization. Our report gives them a
                                non-technical overview and summary of what
                                security threats are facing the organization,
                                and the consequences of the vulnerabilities to
                                the organization if exploited by threat actors.
                                The executives can provide the resources needed
                                to close the gaps and mitigate against possible
                                attacks that could arise from the
                                vulnerabilities.
                            </Text>
                        </Box>
                        <Box
                            maxW="484px"
                            mx={["auto", null, "0"]}
                            w={["100%", null, "50%"]}
                            px={["20px", null, "32px"]}
                            pt="32px"
                            pb="40px"
                            boxShadow="0px 6px 12px rgba(24, 39, 75, 0.12)"
                            bg="brand.white"
                        >
                            <Text
                                align="justify"
                                fontWeight="700"
                                fontSize="18px"
                                color="brand.lightGray"
                                mb="16px"
                            >
                                Technical Management{" "}
                            </Text>
                            <Text
                                align="justify"
                                fontSize={["md", null, "lg"]}
                                color="brand.verylightGray"
                            >
                                This section of the report is addressed to the
                                technical managers who are responsible for the
                                identification and managing the implementation
                                of the appropriate fixes and corrective actions
                                needed to close the gap, and mitigate the
                                vulnerabilities
                            </Text>
                        </Box>
                    </Flex>

                    <Box
                        maxW="484px"
                        mt="56px"
                        mx={["auto", null, "0"]}
                        w={["100%", null, "50%"]}
                        px={["20px", null, "32px"]}
                        pt="32px"
                        pb="40px"
                        boxShadow="0px 6px 12px rgba(24, 39, 75, 0.12)"
                        bg="brand.white"
                    >
                        <Text
                            align="justify"
                            fontWeight="700"
                            fontSize="18px"
                            color="brand.lightGray"
                            mb="16px"
                        >
                            System Administrators
                        </Text>
                        <Text
                            align="justify"
                            fontSize={["md", null, "lg"]}
                            color="brand.verylightGray"
                        >
                            This section of the report is aimed at technical
                            operational team, who are responsible for the
                            implementation of identified fixes/ corrective
                            actions.
                        </Text>
                    </Box>
                </Box>
            </ScreenWidth>
        </Box>
    );
};

export default Department;
