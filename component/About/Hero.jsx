import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
    return (
        <Flex
            bgImage="/images/about/hero.png"
            bgPosition="center"
            bgSize="cover"
            h={["324px", null, "350px"]}
            align="center"
            justify="center"
            color="brand.white"
        >
            <Text
                align="justify"
                fontWeight="700"
                fontSize={["32px", null, "56px"]}
                maxW={["184px", null, "100%"]}
                textAlign="center"
            >
                {" "}
                 THE COMPANY
            </Text>
        </Flex>
    );
};

export default Hero;
