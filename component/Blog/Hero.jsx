import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import SrceenWidth from "../../Layout/ScreenWidth";

const Hero = () => {
    return (
        <Box>
            <Flex
                bgImage="/images/teamBg.png"
                bgPosition="center"
                bgSize="cover"
                h={["428px", null, "512px"]}
                align="center"
                justify="center"
                color="brand.white"
                pt="20px"
            >
                <SrceenWidth>
                    <Box align="center">
                        <Text
                            align="justify"
                            fontWeight="700"
                            fontSize={["32px", null, "56px"]}
                            maxW={["184px", null, "100%"]}
                            textAlign="center"
                            textTransform="uppercase"
                        >
                            BLOG
                        </Text>
                        <Text
                            align="justify"
                            mt="20px"
                            fontSize={["16px", null, "20px"]}
                            fontWeight="400"
                            maxW={["100%", null, "766px"]}
                        >
                            In our regular blog posts, you will find useful
                            cyber security articles, latest news, trends in
                            cybersecurity, and insight on cyber threats, cyber
                            attacks, detection and response. Our
                            multidisciplinary team of cyber security
                            professionals, are dedicated to educating our
                            community, and bringing to the fore the latest in
                            the cyber security space. We are also committed to
                            enlightening our community on the security best
                            practices with the resources available in this
                            section.
                        </Text>
                    </Box>
                </SrceenWidth>
            </Flex>
        </Box>
    );
};

export default Hero;
