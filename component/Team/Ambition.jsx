import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../../Layout/ScreenWidth";
import { ButtonFill } from "../Buttons";
const Ambition = () => {
    return (
        <Box mt={["0", null, "40px"]} py={["0", null, "40px"]} pb="40px">
            <ScreenWidth>
                <Flex
                    flexDir={["column-reverse", null, "row"]}
                    justify="space-between"
                    align="center"
                    gap="32px"
                >
                    <Box>
                        <Image
                            src="images/Team/ambition.png"
                            alt="Future Image"
                        />
                    </Box>

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
                                Do our values match your ambitions?
                            </Text>
                            <Text align="justify" mt="24px">
                                If the answer is yes, detail your experience,
                                qualifications, and career objectives in your
                                application for a great career opportunity with
                                us. Afri-Pro Services adopts creative
                                recruitment practices that ensure all applicants
                                are carefully evaluated.
                                <Text
                                    align="justify"
                                    as="a"
                                    color="brand.orange"
                                >
                                    Email us your CV
                                </Text>{" "}
                                with detail your experience, qualifications and
                                preferenc
                            </Text>
                            <Box mt="40px">
                                <Link
                                    href="mailto:hr@afripro.co.tz"
                                    _hover={{ textDecor: "none" }}
                                >
                                    <ButtonFill
                                        text="Shoot us an email"
                                        blue={true}
                                        textTransformation="uppercase"
                                    />
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </ScreenWidth>
        </Box>
    );
};

export default Ambition;
