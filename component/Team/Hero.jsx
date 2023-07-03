import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
    return (
        <Box>
            <Flex
                bgImage="/images/teamBg.png"
                bgPosition="center"
                bgSize="cover"
                h={["324px", null, "512px"]}
                align="center"
                justify="center"
                color="brand.white"
            >
                <Box align="center">
                    <Text
                        align="justify"
                        fontWeight="700"
                        fontSize={["32px", null, "56px"]}
                        maxW={["184px", null, "100%"]}
                        textAlign="center"
                        textTransform="uppercase"
                    >
                        {" "}
                        Join the Team
                    </Text>
                    <Text
                        align="justify"
                        textAlign="center"
                        fontSize="20px"
                        fontWeight="400"
                    >
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
};

export default Hero;
