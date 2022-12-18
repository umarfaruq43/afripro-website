import { Button, Icon } from "@chakra-ui/react";
import React from "react";
import { BsArrowRight, BsGeoAltFill, BsTelephonePlusFill } from "react-icons/bs";
// {nav} is use to check if the button is for nav bar or not.
// {blue} is to check the color  of the button needed, if {blue} is flase
//  the color will be Orange ELSE the color will be blue.

export const ButtonFill = ({ text, blue, nav, icon, ...props }) => {
    return (
        <Button
            {...props}
            bgColor={blue ? "brand.dark" : "brand.orange"}
            _hover={{
                bgColor: `${
                    nav
                        ? `${"brand.orange"}`
                        : `${blue ? "brand.blue" : "brand.orange"}`
                }`,
                textDecor: "none",
            }}
            // fontSize={["md", "lg"]}
            color="brand.white"
            px="6"
            py="4"
            fontWeight="500"
            borderRadius="none"
            w={["107", "307"]}
            h={["47", "53"]}
            textTransform="uppercase"
        >
            {icon === "phone" ? (
                <Icon as={BsTelephonePlusFill} mr="9px" />
            ) : null}
            {icon === "location" ? (
                <Icon as={BsGeoAltFill} mr="9px" />
            ) : null}
            {text}
            {icon === "arrow" ? <Icon as={BsArrowRight} ml="9px" /> : null}
        </Button>
    );
};

export const ButtonOutline = ({ children, blue, text, icon, ...props }) => {
    return (
        <Button
            borderColor={blue ? "brand.dark" : "brand.orange"}
            color={blue ? "brand.dark" : "brand.orange"}
            bgColor="transparent"
            border="1px"
            _hover={{
                bgColor: `${blue ? "brand.blue" : "brand.orange"}`,
                // color: `${blue ? "brand.blue" : "brand.orange"}`,
                color: "brand.white",
                textDecor: "none",
                borderColor: `${blue ? "brand.dark" : "brand.orange"}`,
            }}
            fontSize="lg"
            px="6"
            py="4"
            fontWeight="500"
            borderRadius="none"
            w={["full", "307"]}
            h={["47", "53"]}
            textTransform="uppercase"
            {...props}
        >
            {text}
            {icon === "arrow" ? <Icon as={BsArrowRight} ml="9px" /> : null}
            {/* <BsArrow  */}
        </Button>
    );
};

// export default Button;
