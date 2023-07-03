import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../../Layout/ScreenWidth";

const Future = () => {
return (
<Box mt={["0", null, "40px" ]} py="40px">
    <ScreenWidth>
        <Flex flexDir={["column", null, "row" ]} justify="space-between" align="center" gap="32px">
            <Box w={["100%", null, "50%" ]}>
                {" "}
                <Box maxW={["100%", null, "562px" ]} fontSize={["16px", null, "18px" ]}>
                    <Text fontWeight="400" fontSize={["xl2", null, "4l" ]}>
                    Join us on our journey to make Businesses smart and secure
                    </Text>
                    <Text align="justify" mt="24px">
                        At Afri-Pro Services, we believe that our employees and clients are the most important
                        stakeholders to us, when they achieve their ambitions and objectives respectively, we do too. To
                        accomplish our commitments to our clients, we need individuals with creative and innovative
                        mindset, and a knack for solving problems, who are willing to go the extra mile to help protect
                        our clients’ businesses to join our continuously growing team.
                    </Text>
                    <Text align="justify" mt="16px">
                        We promise to provide you with a world of opportunities for personal and professional growth
                        within a culture that is based on open communication and collaborations, as we believe that the
                        steps we take together are the ones that take us further.
                    </Text>
                </Box>
            </Box>
            <Box>
                <Image src="images/Team/future.png" alt="Future Image" />
            </Box>
        </Flex>
    </ScreenWidth>
</Box>
);
};

export default Future;