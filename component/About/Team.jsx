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
                    <Text
                        align="justify"
                        fontSize={["sm", null, "xl"]}
                        color="brand.orange"
                        fontWeight={"500"}
                    >
                        {" "}
                        Meet the team
                    </Text>
                    <Text
                        align="justify"
                        fontSize={["2xl", null, "4xl"]}
                        color="brand.lightGray"
                        fontWeight={"700"}
                        mt="8px"
                    >
                        Trusted Afri-Pros Cybersecurity Team
                    </Text>

                    {/* Teams Profile */}
                    <SimpleGrid minChildWidth="250px" gap="32px" mt="32px">
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
                    </SimpleGrid>
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
