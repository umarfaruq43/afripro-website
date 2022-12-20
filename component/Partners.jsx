import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../Layout/ScreenWidth";

const Partners = () => {
    return (
        <Box
            py="24"
            bgImage="images/partnersIllustion.svg"
            bgRepeat="no-repeat"
            bgPosition="bottom left"
            id="portfolio"
        >
            <ScreenWidth>
                <Flex
                    justify={"space-between"}
                    flexDir={["column", null, "row"]}
                    align="center"
                >
                    <Box w={["100%", null, "50%"]}>
                        <Text fontWeight="700" fontSize={["lg", null, "45px"]}>
                            Our Client Portfolio
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
                            Our diverse client portfolio ranges from SMEs to
                            multinationals across various industries, government
                            to non-Governmental across different geographical
                            locations demonstrate our footprints, and trust our
                            clients have in us to help with improving their
                            security maturity.
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
                            We are known for the values we deliver for our
                            client, and that’s why our clients trust us with the
                            protection of their business.
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
                            Some of our clients include:{" "}
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
                            Vodacom, Finca, Exim Bank, NBC, NAPSA, Stanbic,
                            Cloudware Technologies, TCRA, KoloPay
                        </Text>
                    </Box>
                    <Flex
                        p="10"
                        mt={["5", "10"]}
                        gap={["32px", null, "20px"]}
                        w={["100%", null, "50%"]}
                        flexWrap="wrap"
                        justify="space-between"
                    >
                        {logos.map((logo, i) => {
                            return (
                                <Image
                                    key={i}
                                    src={logo.images}
                                    alt=""
                                    w={["40%", "", "20%"]}
                                    h={["42px", "85px"]}
                                />
                            );
                        })}
                    </Flex>
                </Flex>
            </ScreenWidth>
        </Box>
    );
};

export default Partners;

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
