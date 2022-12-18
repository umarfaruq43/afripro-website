import { Box, Flex, Icon, Link, Text, Image } from "@chakra-ui/react";
import React from "react";
import { BsEnvelopeFill, BsGeoAltFill, BsTelephoneFill } from "react-icons/bs";
import ScreenWidth from "../../Layout/ScreenWidth";
import { ButtonFill } from "../Buttons";
import LocationMap from "./Index";
// import Location from "./Location";

const Map = () => {
    return (
        <Box
            bgImage="images/locationBg.svg"
            bgSize="cover"
            bgPosition="center"
            id="location"
        >
            <Box maxWidth="1500px" mx="auto">
                <Flex
                    gap={["24px", null, "40px"]}
                    flexDir={["column", null, "row"]}
                >
                    <Box maxH="655px" w={["100%", null, "760px"]}>
                        {/* <Image
                            src="/images/location.svg"
                            alt="LOaction"
                            w="100%"
                        /> */}

                        <LocationMap />
                    </Box>
                    <Box
                        maxW={["100%", null, "312px"]}
                        py={["8px", null, "68px"]}
                        px="16px"
                    >
                        <Text
                            align="justify"
                            color="brand.orange"
                            fontWeight="500"
                            fontSize={["sm", null, "xl"]}
                        >
                            Our Location
                        </Text>
                        <Text
                            align="justify"
                            fontWeight="700"
                            color="brand.blue"
                            fontSize={["2xl", null, "5xl"]}
                        >
                            You can find us anytime
                        </Text>

                        {/* <Box my="40px">
                            <Link href="#">
                                <ButtonFill
                                    blue="true"
                                    icon="location"
                                    text="GET DIRECTION"
                                />
                            </Link>
                        </Box> */}

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
                                    color="brand.blue"
                                >
                                    <Flex align="center" gap="12px">
                                        <Icon as={BsEnvelopeFill} />{" "}
                                        <Text align="justify" fontSize="16px">
                                            info@afripro.co.tz
                                        </Text>
                                    </Flex>
                                </Link>

                                <Link
                                    href="tel:+255789121119"
                                    mb="16px"
                                    color="brand.blue"
                                >
                                    <Flex align="center" gap="12px">
                                        <Icon as={BsTelephoneFill} />{" "}
                                        <Text align="justify" fontSize="16px">
                                            +255 789 121 119
                                        </Text>
                                    </Flex>
                                </Link>

                                <Link href="#" mb="16px" color="brand.blue">
                                    <Flex gap="12px">
                                        <Icon as={BsGeoAltFill} />{" "}
                                        <Text
                                            align="justify"
                                            fontSize="16px"
                                            maxW="228px"
                                        >
                                            3rd Floor Green {`Acer's`} House,
                                            Plot 45, Old Bagamoyo Road, Dar es
                                            Salaam
                                        </Text>
                                    </Flex>
                                </Link>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

export default Map;
