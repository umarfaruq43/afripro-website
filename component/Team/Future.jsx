import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../../Layout/ScreenWidth";

const Future = () => {
    return (
        <Box mt={["0", null, "40px"]} py="40px">
            <ScreenWidth>
                <Flex
                    flexDir={["column", null, "row"]}
                    justify="space-between"
                    align="center"
                    gap="32px"
                >
                    <Box w={["100%", null, "50%"]}>
                        {" "}
                        <Box
                            maxW={["100%", null, "456px"]}
                            fontSize={["16px", null, "18px"]}
                        >
                            <Text
                                align="justify"
                                fontWeight="400"
                                fontSize={["xl2", null, "4l"]}
                            >
                                Allow us to brighten your future
                            </Text>
                            <Text align="justify" mt="24px">
                                At AFRI PRO SERVICES we believe that our clients
                                and employees make our stronghold and when they
                                achieve their ambitions, we do too. To
                                accomplish this we need individuals with
                                creative and innovative solutions who are
                                willing to go the extra mile for their future,
                                our clients and the bank.
                            </Text>
                            <Text align="justify" mt="8px">
                                We promise to provide you with a world of
                                opportunities for personal growth within a
                                culture that is based on co-operation in every
                                section of our business countrywide. We believe
                                that the steps we take together are the ones
                                that take us further.
                            </Text>
                        </Box>
                    </Box>
                    <Box>
                        <Image
                            src="images/Team/future.png"
                            alt="Future Image"
                        />
                    </Box>
                </Flex>
            </ScreenWidth>
        </Box>
    );
};

export default Future;
