import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { ButtonFill } from "../Buttons";

const Hero = () => {
    return (
        <Box>
            <Flex
                bgImage="/images/contactUs.png"
                bgPosition="center"
                bgSize="cover"
                h={["362px", null, "512px"]}
                align="center"
                justify="center"
                color="brand.white"
                pt="20"
            >
                <Box>
                    <Text
                        align="justify"
                        fontWeight="700"
                        fontSize={["28px", null, "56px"]}
                        // maxW={["184px", null, "100%"]}
                        textAlign="center"
                    >
                        {" "}
                        CONTACT US
                    </Text>
                    <Text
                        align="justify"
                        mt="20px"
                        fontWeight="400"
                        fontSize={["16px", null, "20px"]}
                        textAlign="center"
                        px="12px"
                    >
                        Get in touch with us for all your cybersecurity needs.
                    </Text>
                    <Box mt={["48px", null, "32px"]} textAlign="center">
                        <Link
                            href="tel:+2345676788909"
                            _hover={{ textDecor: "none" }}
                        >
                            <ButtonFill
                                blue={true}
                                text={"IMMEDITATE INCIDENT RESPONSE"}
                                icon="phone"
                                maxW={["279px", null, "331px"]}
                                fontSize={["sm", null, "md"]}
                                px="24px"
                            />
                        </Link>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default Hero;
