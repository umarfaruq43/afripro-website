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
        <Box py={["64px", null, "80px"]}>
            <ScreenWidth>
                <Box>
                    {/* Teams Profile */}
                    {/* <SimpleGrid minChildWidth="250px" gap="32px" mt="32px">
                        {profile.map(({ user, href, image, position }, i) => {
                            return (
                                <ProfileCard
                                    key={i}
                                    user={user}
                                    href={href}
                                    image={image}
                                    position={position}
                                />
                            );
                        })}
                    </SimpleGrid> */}

                    <VulnerabilityAssessments />
                </Box>
            </ScreenWidth>
        </Box>
    );
};

export default Team;

const ProfileCard = ({ user, href, image, position }) => {
    return (
        <Box
            mx={["auto", null, "0"]}
            border="1px solid #FFFFFF"
            as={Link}
            _hover={{ textDecor: "none" }}
            href={href}
            minW="232px"
            maxW="350px"
            w="100%"
            shadow="0px 6px 12px rgba(24, 39, 75, 0.12)"
        >
            <Image
                src={image}
                alt={`${user} Name`}
                objectFit="cover"
                w="100%"
            />
            <Flex
                px="20px"
                pb="32px"
                pt="20px"
                justify="space-between"
                align="center"
            >
                <Box>
                    <Text align="justify" fontSize="20px" fontWeight={"500"}>
                        {user}
                    </Text>
                    <Text
                        align="justify"
                        fontSize="16px"
                        color="brand.orange"
                        fontWeight={"400"}
                    >
                        {" "}
                        {position}{" "}
                    </Text>
                </Box>
                <Flex p="8px" shadow="0px 2px 6px rgba(24, 39, 75, 0.07)">
                    <Icon as={BsLinkedin} w="24px" h="24px" />
                </Flex>
            </Flex>
        </Box>
    );
};

const profile = [
    {
        user: "John Doe",
        href: "#",
        image: "/images/about/user.svg",
        position: "Position",
    },
    {
        user: "John Doe",
        href: "#",
        image: "/images/about/user.svg",
        position: "Position",
    },
    {
        user: "John Doe",
        href: "#",
        image: "/images/about/user.svg",
        position: "Position",
    },
    {
        user: "John Doe",
        href: "#",
        image: "/images/about/user.svg",
        position: "Position",
    },
];

const VulnerabilityAssessments = ({ ...others }) => {
    return (
        <Box {...others} id="vulnerability">
            <ScreenWidth>
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
                                align="justify"
                                fontSize={["2xl", null, "4xl"]}
                                color="brand.lightGray"
                                fontWeight={"700"}
                                mt="8px"
                            >
                                Our Team
                            </Text>

                            <Text align="justify" mt="16px">
                                Our team is made up of seasoned Cyber security
                                experts with wealth of experience delivering
                                advanced security services to our clients. Our
                                team comprises of both industry experts in
                                business and cyber security domains such as
                                technical security testing, deploying, and
                                configuring technical security controls, and
                                developing and implementing Cyber Security
                                strategies and roadmaps, facilitating the
                                delivery of balanced security-oriented services
                                to our clients. We have an exciting team of
                                competent young and exciting professionals,
                                supported by a team of experienced industry
                                experts, providing leadership and expertise,
                                thus facilitating an agile resourcing model for
                                the delivery of our services.
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
            </ScreenWidth>
        </Box>
    );
};
