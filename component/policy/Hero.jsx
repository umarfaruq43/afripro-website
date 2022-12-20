import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import ScreenWidth from "../../Layout/ScreenWidth";

const Hero = () => {
    return (
        <Box>
            <Flex
                bgImage="/images/service/herobg.png"
                bgPosition="center"
                bgSize="cover"
                h={["312px", null, "312px"]}
                align="center"
                justify="center"
                color="brand.white"
                pt="20px"
            >
                <ScreenWidth>
                    <Box align="center">
                        <Text
                            align="justify"
                            fontWeight="700"
                            fontSize={["32px", null, "56px"]}
                            maxW={["100%", null, "900px"]}
                            textAlign="center"
                            textTransform="uppercase"
                        >
                            Privacy  Policy 
                        </Text>
                    </Box>
                </ScreenWidth>
            </Flex>
        </Box>
    );
};

export default Hero;
