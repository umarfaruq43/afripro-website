import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../Layout/ScreenWidth";
import { ButtonFill } from "./Buttons";

const JoinTeam = () => {
    return (
        <Box py="80px" bgColor="brand.tickwhite">
            <ScreenWidth>
                <Flex align="center" justify="space-between" flexDir={["column", null, "row"]}>
                    <Box maxW="784px" textAlign={["center", null, "left"]}>
                        <Text align="justify" fontWeight="700" fontSize={["24px", null, "45px"]}>
                            Want to Join the Team?       
                        </Text>
                        <Text align="justify" fontSize={["16", null, "20px"]} fontWeight="400" mt="8px"
                            color="brand.lightGray">
                            Are you a fresh university graduate? Are you an experienced Cyber Security Professional?
                        </Text>
                    </Box>
                    <Box mt={["40px", null, ""]}>
                        <Link href="/team" _hover={{ textDecoration: "none" }}>
                            <ButtonFill text="FIND OUT MORE" icon="arrow" />
                        </Link>
                    </Box>
                </Flex>
            </ScreenWidth>
        </Box>
    );
};

export default JoinTeam;