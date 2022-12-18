import { Box, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

// photo_name, created_at, title, id, slug;
const NewsCard = ({ photo_name, created_at, title, slug, id }) => {
    //     console.log(title);

    //    Function to Format the date => created_at..
    var monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    var newdate;
    var dateObj = new Date(created_at);
    var month = dateObj.getUTCMonth(); //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    //     formated Date
    newdate = monthNames[month] + " " + day + ", " + year;

    return (
        <Box
            w={["100%"]}
            //     className="filter"
            shadow="0px 6px 12px rgba(24, 39, 75, 0.12)"
            border="1px"
            borderColor="brand.white"
            //     maxW="328px"
            cursor="pointer"
            mx="auto"
        >
            <Box w="100%" h="193px">
                <Image
                    src={photo_name}
                    alt=""
                    w="100%"
                    h="100%"
                    objectFit="cover"
                />
            </Box>
            <Box pt="20px" pb="32px" px="20px">
                <Text
                    align="justify"
                    fontSize="14px"
                    fontWeight="400"
                    color="brand.verylightGray"
                >
                    {newdate}
                </Text>
                <Text
                    align="justify"
                    color="brand.blue"
                    fontSize={["16px", null, "20px"]}
                    mt="16px"
                    fontWeight="500"
                    noOfLines="3"
                >
                    {title}
                </Text>
                <Link
                    href={`post/${slug}`}
                    mt="32px"
                    display="inline-block"
                    color="brand.orange"
                    fontSize={["14px"]}
                    fontWeight="700"
                >
                    READ MORE
                </Link>
            </Box>
        </Box>
    );
};

export default NewsCard;
