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
                            In theAfripro blog, you will find helpful
                            information security articles, trends in
                            cybersecurity, and insight on threats and cyber
                            attacks. Our team of information security experts, a
                            multidisciplinary group of professionals, are
                            dedicated to addressing incidents and security best
                            practices in this blog discussion.
                        </Text>
                    </Box>
                </SrceenWidth>
            </Flex>
        </Box>
    );
};

export default Hero;
