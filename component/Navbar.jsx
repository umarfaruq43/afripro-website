import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import ScreenWidth from "../Layout/ScreenWidth";
import { ButtonFill } from "./Buttons";

const Navbar = ({ navbarColor }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box
            bgColor={navbarColor ? "brand.white" : "rgba(255, 255, 255, 0.09)"}
            backdropFilter="auto"
            top="0"
            backdropBlur="10px"
            position="fixed"
            w="full"
            shadow="0px 4px 15px -2px rgba(29, 39, 106, 0.12)"
            zIndex="overlay"
        >
            <ScreenWidth>
                <Flex minH="20" align={"center"} justify="space-between">
                    {/* Logo  */}
                    <Link href="/">
                        {navbarColor ? (
                            <Image
                                src="/images/DarkLogo.svg"
                                alt="Afripro logo"
                            />
                        ) : (
                            <Image
                                src="/images/LightLogo.svg"
                                alt="Afripro logo"
                            />
                        )}
                    </Link>
                    {/* desktop nav */}
                    <Flex display={{ base: "none", md: "flex" }} ml={10}>
                        <DesktopNav navbarColor={navbarColor} />
                    </Flex>

                    {/* Toggle mobile Nav */}
                    <Flex display={{ base: "flex", md: "none" }}>
                        <IconButton
                            _focus={{ bgColor: "transparent" }}
                            _hover={{ bgColor: "transparent" }}
                            onClick={onToggle}
                            icon={isOpen ? <FaTimes /> : <FaBars />}
                            variant={"ghost"}
                            color={navbarColor ? "brand.blue" : "brand.white"}
                            aria-label={"Toggle Navigation"}
                        />
                    </Flex>
                </Flex>

                {/* Mobile Nav container */}
                <Collapse in={isOpen} animateOpacity>
                    <MobileNav navbarColor={navbarColor} />
                </Collapse>
            </ScreenWidth>
        </Box>
    );
};

export default Navbar;
// Desktop nav menu
const DesktopNav = ({ navbarColor }) => {
    //  console.log(navbarColor);
    return (
        <Stack direction={"row"} spacing="16" align="center">
            {NAV_ITEMS.map((navItem) => (
                //  <Box key={navItem.label}>
                <Link
                    key={navItem.label}
                    p={2}
                    display="inline-block"
                    href={navItem.href ?? "#"}
                    fontSize="lg"
                    fontWeight={500}
                    color={navbarColor ? "brand.blue" : "brand.white"}
                    _hover={{
                        textDecoration: "none",
                    }}
                    textTransform="uppercase"
                >
                    {navItem.label}
                </Link>
                //  </Box>
            ))}
            {/* Contact us button  */}
            <Link href="/contact" _hover={{ textDecoration: "none" }}>
                <ButtonFill
                    text="Contact us"
                    blue={navbarColor ? true : false}
                    nav={true}
                />
            </Link>
        </Stack>
    );
};

const MobileNav = ({ navbarColor }) => {
    return (
        <Stack p={4} display={{ md: "none" }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem
                    key={navItem.label}
                    {...navItem}
                    navbarColor={navbarColor}
                />
            ))}
            <Link href="/contact" _hover={{ textDecoration: "none" }}>
                <ButtonFill
                    text="Contact us"
                    blue={navbarColor ? true : false}
                    nav={true}
                    minW="100%"
                    mt="16px"
                />
            </Link>
        </Stack>
    );
};

// This function is for the navbar items on moblie visualViewport.
const MobileNavItem = ({ label, href, navbarColor }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4}>
            <Flex
                py={2}
                as={Link}
                href={href ?? "#"}
                justify={"space-between"}
                align={"center"}
                color={navbarColor ? "brand.blue" : "brand.white"}
                _hover={{
                    textDecoration: "none",
                }}
            >
                <Text align="justify" fontWeight={600} mx="auto">
                    {label}
                </Text>
            </Flex>
        </Stack>
    );
};

// This are the nav Items

const NAV_ITEMS = [
    {
        label: "Services",
        href: "/service",
    },
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Blog",
        href: "/blog",
    },
];
