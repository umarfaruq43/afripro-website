import { Box } from "@chakra-ui/react";
import React from "react";

const ScreenWidth = ({ children, ...props }) => {
    return (
        <Box {...props} maxW="1500px" mx="auto" px={["16px", "22px", "44px"]}>
            {children}
        </Box>
    );
};

export default ScreenWidth;
