import {
    Box,
    Flex,
    Icon,
    Image,
    Link,
    ListItem,
    SimpleGrid,
    Text,
    UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { BsEnvelopeFill, BsGeoAltFill, BsTelephoneFill } from "react-icons/bs";
import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";
import ScreenWidth from "../Layout/ScreenWidth";

const Footer = () => {
    return (
        <Box bgColor="brand.blue" pt="100px" pb="40px">
            <ScreenWidth>
                <Flex
                    color="brand.white"
                    gap="32px"
                    flexDir={["column", null, "row"]}
                    justify="space-between"
                >
                    <Box minW={[null, "200px", "236px"]} >
                        <Image src="/images/LightLogo.svg" alt="" w="237px" />
                        <Text
                            align="justify"
                            fontWeight="400"
                            fontSize="16px"
                            maxW="336px"
                            mt="20px"
                        >
                            Afri-Pro Services protect, defend, and inform
                            businesses to help them achieve success.
                        </Text>
                    </Box>

                    <Box>
                        <Text
                            align="justify"
                            fontWeight="700"
                            fontSize="22px"
                            mb="16px"
                        >
                            Services
                        </Text>
                        <Flex flexDirection="column">
                            {footerMenu.map(({ text, href }, i) => {
                                return (
                                    <Link
                                        href={href}
                                        mb="16px"
                                        color="brand.veryDimWhite"
                                        key={i}
                                    >
                                        {text}
                                    </Link>
                                );
                            })}
                        </Flex>
                    </Box>

                    <Box>
                        <Text
                            align="justify"
                            fontWeight="700"
                            fontSize="22px"
                            mb="16px"
                        >
                            Company
                        </Text>
                        <Flex flexDirection="column">
                            {footerMenu2.map(({ text, href }, i) => {
                                return (
                                    <Link
                                        href={href}
                                        mb="16px"
                                        color="brand.veryDimWhite"
                                        key={i}
                                    >
                                        {text}
                                    </Link>
                                );
                            })}
                        </Flex>
                    </Box>
                    <Box>
                        <Text
                            align="justify"
                            fontWeight="700"
                            fontSize="22px"
                            mb="16px"
                        >
                            Contact us
                        </Text>
                        <Flex flexDirection="column">
                            <Link
                                href="mailto:info@afripro.co.tz"
                                mb="16px"
                                color="brand.veryDimWhite"
                            >
                                <Flex align="center" gap="12px">
                                    <Icon as={BsEnvelopeFill} />{" "}
                                    <Text align="justify">
                                        info@afripro.co.tz
                                    </Text>
                                </Flex>
                            </Link>

                            <Link
                                href="tel:+255789121119"
                                mb="16px"
                                color="brand.veryDimWhite"
                            >
                                <Flex align="center" gap="12px">
                                    <Icon as={BsTelephoneFill} />{" "}
                                    <Text align="justify">
                                        +255 789 121 119
                                    </Text>
                                </Flex>
                            </Link>

                            <Link
                                href="https://www.linkedin.com/company/afri-pro-services/about/?viewAsMember=true"
                                mb="16px"
                                color="brand.veryDimWhite"
                            >
                                <Flex align="center" gap="12px">
                                    <Icon as={BsGeoAltFill} />{" "}
                                    <Text align="justify">Location</Text>
                                </Flex>
                            </Link>

                            <Link
                                href="https://twitter.com/AfriProServices"
                                mb="16px"
                                color="brand.veryDimWhite"
                            >
                                <Flex align="center" gap="12px">
                                    <Icon as={FaLinkedin} />{" "}
                                    <Text align="justify">Linkedin</Text>
                                </Flex>
                            </Link>

                            <Link href="" mb="16px" color="brand.veryDimWhite">
                                <Flex align="center" gap="12px">
                                    <Icon as={FaTwitter} />{" "}
                                    <Text align="justify">Twitter</Text>
                                </Flex>
                            </Link>
                        </Flex>
                    </Box>
                </Flex>
                <Flex
                    color="brand.veryDimWhite"
                    pt="62px"
                    justify="center"
                    align="center"
                >
                    <Text
                        align="justify"
                        maxW={["312px", null, "467px"]}
                        fontSize="16px"
                        textAlign="center"
                    >
                        © Copyright 2022 AFRIPRO.. All rights reserved | Privacy
                        Policy
                    </Text>
                </Flex>
            </ScreenWidth>
        </Box>
    );
};

export default Footer;

const footerMenu = [
    {
        href: "/service",
        text: "Offensive Security",
    },
    {
        href: "/service#detect",
        text: "Detect & Respond",
    },
    {
        href: "#",
        text: "Security Compliance",
    },
];

const footerMenu2 = [
    {
        href: "/about",
        text: "About Us",
    },
    {
        href: "/contact",
        text: "Contact Us",
    },
    {
        href: "/team",
        text: "Meet the team",
    },
];

const footerMenu3 = [
    {
        href: "#",
        text: "info@afripro.co.tz",
    },
    {
        href: "+255789121119",
        text: "+255 789 121 119",
    },
    {
        href: "",
        text: "Location",
    },
    {
        href: "",
        text: "Location",
    },
    {
        href: "",
        text: "Location",
    },
];
