import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../../Layout/ScreenWidth";
import { ButtonFill } from "../Buttons";

const Hero = () => {
    return (
        <Box>
            <Box
                bg="url(/images/landingPage/hero.svg)"
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition={["left", null, "center"]}
                minH="716px"
                pt="20"
                pb="130"
            >
                <ScreenWidth>
                    <Box
                        maxW="520"
                        color="brand.white"
                        pt={["85px", null, "115"]}
                        textAlign={["center", null, "left"]}
                    >
                        <Text fontSize={["32px", null, "5xl"]} fontWeight="700">
                            Providing Advanced Cybersecurity Services
                        </Text>
                        <Text
                            align="justify"
                            fontSize={["18px", null, "xl2"]}
                            mt="5"
                        >
                            We are focused on improving our client’s cyber
                            resilience, and ultimately enabling them to protect
                            their business and withstand cyber-attacks
                        </Text>

                        <Box mt="12">
                            <ButtonFill
                                text="Contact us"
                                blue={false}
                                maxW={["full", null, "147"]}
                                style={{ width: "100%" }}
                            />
                        </Box>
                    </Box>
                </ScreenWidth>
            </Box>
        </Box>
    );
};

export default Hero;
