import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../Layout/ScreenWidth";

const Vendor = () => {
    return (
        <Box
            py="24"
            bgImage="images/partnersIllustion.svg"
            bgRepeat="no-repeat"
            bgPosition="bottom left"
            id="vendor"
        >
            <ScreenWidth>
                <Flex
                    justify={"space-between"}
                    flexDir={["column", null, "row"]}
                    align="center"
                >
                    <Flex
                        p="10"
                        mt={["5", "10"]}
                        gap={["32px", null, "20px"]}
                        w={["100%", null, "50%"]}
                        flexWrap="wrap"
                        justify="space-between"
                    >
                        <Image src="/images/landingPage/vendor.jpeg" alt="" />
                    </Flex>

                    <Box w={["100%", null, "50%"]}>
                        <Text fontWeight="700" fontSize={["lg", null, "45px"]}>
                            Our Vendor Partners
                        </Text>

                        <Text
                            align="justify"
                            mt="2"
                            fontWeight="400"
                            fontSize={["md", null, "lg"]}
                            color="brand.light"
                            //     className="justify"
                            maxW="592px"
                        >
                            To deliver cutting edge cybersecurity controls to
                            our clients, we partner with the leading security
                            vendors as a Value-Added Reseller/ System Integrator
                            for the East Africa and Africa region. A
                            non-exhaustive list of some of our vendor partners
                            include:
                        </Text>

                        <Text
                            align="justify"
                            mt="2"
                            fontWeight="400"
                            fontSize={["md", null, "lg"]}
                            color="brand.light"
                            //     className="justify"
                            maxW="592px"
                        >
                            Imperva, Tenable, Symantec, AT&T Cybersecurity
                            (Alien Vault), Darktrace, Palo alto, Fortinet, IBM,
                            Centrify, Proofpoint, Netskope, Knowbe4, Manage
                            Engine, Cynet, Crowd Strike, Titus, Fortinet,
                            Microsoft Security, Google Cloud, Fore Scout, Titus,
                            Mimecast amongst others
                        </Text>
                    </Box>
                </Flex>
            </ScreenWidth>
        </Box>
    );
};

export default Vendor;

const logos = [
    { href: "#", images: "/images/partners/vodafone.svg" },
    { href: "#", images: "/images/partners/finca.svg" },
    { href: "#", images: "/images/partners/exim.svg" },
    { href: "#", images: "/images/partners/kolo.svg" },
    { href: "#", images: "/images/partners/pension.svg" },
    { href: "#", images: "/images/partners/stambicBank.svg" },
    { href: "#", images: "/images/partners/cwt.svg" },
    { href: "#", images: "/images/partners/tcra.svg" },
];
