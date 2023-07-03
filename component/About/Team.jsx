import {
    Box,
    Flex,
    Icon,
    Image,
    Link,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import ScreenWidth from "../../Layout/ScreenWidth";

const Team = () => {
    return (
        <Box py={["44px", null, ""]}>
            <ScreenWidth>
                <Box>
                    <VulnerabilityAssessments />
                </Box>
            </ScreenWidth>
        </Box>
    );
};

export default Team;

const VulnerabilityAssessments = ({ ...others }) => {
    return (
        <Box {...others} id="team">
            <Flex
                flexDir={["column-reverse", null, "row"]}
                justify="space-between"
                align="center"
                gap="32px"
                id="expertteam"
            >
                <Box w={["100%", null, "50%"]}>
                    {" "}
                    <Box
                        maxW={["100%", null, "576px"]}
                        fontSize={["16px", null, "18px"]}
                    >

                        <Text
                            fontSize={["2xl", null, "4xl"]}
                            color="brand.lightGray"
                            fontWeight={"700"}
                            mt="8px"
                        >
                            {" "}
                            Our{" "}
                            <Text
                                align="justify"
                                as="span"
                                color="brand.orange"
                            >
                                {" "}
                                Team
                            </Text>
                        </Text>

                        <Text align="justify"
                        mt="2"
                        >
                            Our team is made up of seasoned Cyber security
                            experts with wealth of experience delivering
                            advanced security services to our clients. Our team
                            comprises of both industry experts in business and
                            cyber security domains such as technical security
                            testing, deploying, and configuring technical
                            security controls, and developing and implementing
                            Cyber Security strategies and roadmaps, facilitating
                            the delivery of balanced security-oriented services
                            to our clients.
                        </Text>
                        <Text align="justify" mt="16px">
                             We have an exciting team of
                            competent young and exciting professionals,
                            supported by a team of experienced industry experts,
                            providing leadership and expertise, thus
                            facilitating an agile resourcing model for the
                            delivery of our services.
                        </Text>
                    </Box>
                </Box>
                {/* *****Second Column***** */}
                <Box>
                    <Image
                        src="images/service/vunerability.svg"
                        alt="Future Image"
                    />
                </Box>
            </Flex>
        </Box>
    );
};
