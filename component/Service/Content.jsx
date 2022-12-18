import {
    Box,
    Flex,
    Button,
    Icon,
    Text,
    Image,
    Link,
    SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
    BsArrowRight,
    BsFillArrowDownSquareFill,
    BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import OffensiveSecurity from "./OffensiveSecurity";

import Partners from "../Partners";
import JoinTeam from "../JoinTeam";
import SecurityDetection from "./SecurityDetection";
import SecurityAdvisory from "./SecurityAdvisory";
import { useRouter } from "next/router";
const Content = () => {
    const router = useRouter();
    const [active, setActive] = useState(1);
    const handleActive = (activeNumber) => {
        setActive(activeNumber);
    };
    useEffect(() => {
        if (router && router.asPath == "/service#detect") {
            setActive(2);
        } else if (router && router.asPath == "/service#advisory") {
            setActive(3);
        }
    }, []);

    return (
        <Box>
            <Box>
                <ServiceNav active={active} handleActive={handleActive} />
            </Box>
            <Box>
                {active == 1 ? <OffensiveSecurity /> : ""}
                {active == 2 ? <SecurityDetection /> : ""}
                {active == 3 ? <SecurityAdvisory /> : ""}
            </Box>
            {/* <Partners /> */}
            <JoinTeam />
        </Box>
    );
};

export default Content;

const ServiceNav = ({ active, handleActive }) => {
    return (
        <Box>
            <SimpleGrid minChildWidth={["300px"]}>
                <Button
                    mb="-3px"
                    w="100%"
                    h="54px"
                    py="16px"
                    px={["20px", null, "36px"]}
                    textTransform="uppercase"
                    bgColor="brand.deepBlue"
                    _hover={{ bgColor: "none" }}
                    _focus={{ bgColor: "brand.deepBlue" }}
                    borderColor={"brand.white"}
                    fontWeight="500"
                    borderRadius="0"
                    onClick={() => handleActive(1)}
                >
                    {active == 1 ? (
                        <Icon
                            as={BsFillArrowDownSquareFill}
                            width="22px"
                            height="22px"
                            mr="8px"
                            color="brand.white"
                        />
                    ) : null}
                    <Text
                        align="justify"
                        color={
                            active == 1 ? "brand.white" : "brand.verylightGray"
                        }
                    >
                        Offensive Security Services
                    </Text>
                </Button>

                <Button
                    // minW="350px"
                    mb="-3px"
                    w="100%"
                    h="54px"
                    py="16px"
                    px={["20px", null, "36px"]}
                    textTransform="uppercase"
                    bgColor="brand.deepBlue"
                    _hover={{ bgColor: "none" }}
                    _focus={{ bgColor: "brand.deepBlue" }}
                    borderColor={"brand.white"}
                    fontWeight="500"
                    borderRadius="0"
                    onClick={() => handleActive(2)}
                >
                    {active == 2 ? (
                        <Icon
                            as={BsFillArrowDownSquareFill}
                            width="22px"
                            height="22px"
                            mr="8px"
                            color="brand.white"
                        />
                    ) : null}
                    <Text
                        align="justify"
                        color={
                            active == 2 ? "brand.white" : "brand.verylightGray"
                        }
                    >
                        Security Detection & Response
                    </Text>
                </Button>

                <Button
                    // minW="350px"
                    mb="-3px"
                    w="100%"
                    h="54px"
                    py="16px"
                    px={["20px", null, "36px"]}
                    textTransform="uppercase"
                    bgColor="brand.deepBlue"
                    _hover={{ bgColor: "none" }}
                    _focus={{ bgColor: "brand.deepBlue" }}
                    borderColor={"brand.white"}
                    fontWeight="500"
                    borderRadius="0"
                    onClick={() => handleActive(3)}
                >
                    {active == 3 ? (
                        <Icon
                            as={BsFillArrowDownSquareFill}
                            width="22px"
                            height="22px"
                            mr="8px"
                            color="brand.white"
                        />
                    ) : null}
                    <Text
                        align="justify"
                        color={
                            active == 3 ? "brand.white" : "brand.verylightGray"
                        }
                    >
                        Security Compliance and Advisory
                    </Text>
                </Button>
                {/* <Box w="100%" h="1px"></Box> */}
            </SimpleGrid>
        </Box>
    );
};
