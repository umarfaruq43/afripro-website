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
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
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
                                alt="Afri-Pro logo"
                            />
                        ) : (
                            <Image
                                src="/images/LightLogo.svg"
                                alt="Afri-Pro logo"
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
        <Stack direction={"row"} spacing="6" align="center">
            {NAV_ITEMS.map((navItem, i) => {
                return (
                    <Menu key={i}>
                        <MenuButton
                            as={Button}
                            key={navItem.label}
                            // p={2}
                            display="flex"
                            align="center"
                            href={navItem.href ?? "#"}
                            fontSize="14px"
                            fontWeight={500}
                            bg="transparent"
                            color={navbarColor ? "brand.blue" : "brand.white"}
                            _hover={{
                                textDecoration: "none",
                            }}
                            _active={{
                                bg: "transparent",
                            }}
                            rightIcon={<FiChevronDown />}
                        >
                            {navItem.label}
                        </MenuButton>
                        <MenuList bg="transparent" border="none">
                            <Box
                                bgColor="#fff"
                                // maxW="206px"
                                px="16px"
                                pt="14px"
                                pb="20px"
                                shadow="2xl"
                                border="1px"
                                borderColor="brand.orange"
                            >
                                {navItem.children &&
                                    navItem.children.map((subMenu, i) => {
                                        return (
                                            <Link
                                                key={i}
                                                href={subMenu.href}
                                                py="12px"
                                                // w="100%"
                                                fontSize="14px"
                                                fontWeight="500"
                                                display="block"
                                                color="brand.deepBlue"
                                                _hover={{
                                                    color: "brand.orange",
                                                }}
                                            >
                                                {subMenu.label}
                                            </Link>
                                        );
                                    })}
                            </Box>
                        </MenuList>
                    </Menu>
                );
            })}

            {/* Our Service Menu  */}

            {service.map((item, i) => {
                return (
                    <Menu key={i}>
                        <MenuButton
                            as={Button}
                            // p={2}
                            display="flex"
                            align="center"
                            href={item.href ?? "#"}
                            fontSize="14px"
                            fontWeight={500}
                            bg="transparent"
                            color={navbarColor ? "brand.blue" : "brand.white"}
                            _hover={{
                                textDecoration: "none",
                            }}
                            _active={{
                                bg: "transparent",
                            }}
                            rightIcon={<FiChevronDown />}
                        >
                            {item.label}
                        </MenuButton>
                        <MenuList bg="transparent" border="none">
                            <Flex
                                bgColor="#fff"
                                px="16px"
                                pt="24px"
                                pb="20px"
                                border="1px"
                                borderColor="brand.orange"
                            >
                                {/* Menu 1  */}
                                <Box
                                    bgColor="#fff"
                                    px="26px"
                                    pt="14px"
                                    pb="20px"
                                    borderRight={"1px"}
                                    borderColor="#9299A2"
                                >
                                    <Text fontWeight={500} fontSize={"14px"}>
                                        {" "}
                                        Vulnerability Assessment
                                    </Text>
                                    {item.children &&
                                        item.children.map((subMenu) => {
                                            return (
                                                <Link
                                                    key={subMenu.labe}
                                                    href={subMenu.href}
                                                    // py="12px"
                                                    my="8px"
                                                    maxW="195px"
                                                    // w="100%"
                                                    fontSize="14px"
                                                    fontWeight="400"
                                                    display="block"
                                                    color="brand.verylightGray"
                                                    _hover={{
                                                        color: "brand.orange",
                                                    }}
                                                >
                                                    {subMenu.label}
                                                </Link>
                                            );
                                        })}
                                </Box>
                                {/* Menu 2  */}
                                <Box
                                    bgColor="#fff"
                                    px="26px"
                                    pt="14px"
                                    pb="20px"
                                    borderRight="1px"
                                    borderColor="#9299A2"
                                >
                                    <Text fontWeight={500} fontSize={"14px"}>
                                        {" "}
                                        Security Detection and Response
                                    </Text>
                                    {item.children_2 &&
                                        item.children_2.map((subMenu) => {
                                            return (
                                                <Link
                                                    key={subMenu.labe}
                                                    href={subMenu.href}
                                                    // py="12px"
                                                    my="8px"
                                                    maxW="195px"
                                                    // w="100%"
                                                    fontSize="14px"
                                                    fontWeight="400"
                                                    display="block"
                                                    color="brand.verylightGray"
                                                    _hover={{
                                                        color: "brand.orange",
                                                    }}
                                                >
                                                    {subMenu.label}
                                                </Link>
                                            );
                                        })}
                                </Box>

                                {/* Menu 3  */}
                                <Box
                                    bgColor="#fff"
                                    px="26px"
                                    pt="14px"
                                    pb="20px"
                                >
                                    <Text fontWeight={500} fontSize={"14px"}>
                                        Vulnerability Assessment
                                    </Text>
                                    {item.children_3 &&
                                        item.children_3.map((subMenu) => {
                                            return (
                                                <Link
                                                    key={subMenu.labe}
                                                    href={subMenu.href}
                                                    // py="12px"
                                                    my="8px"
                                                    maxW="195px"
                                                    // w="100%"
                                                    fontSize="14px"
                                                    fontWeight="400"
                                                    display="block"
                                                    color="brand.verylightGray"
                                                    _hover={{
                                                        color: "brand.orange",
                                                    }}
                                                >
                                                    {subMenu.label}
                                                </Link>
                                            );
                                        })}
                                </Box>
                            </Flex>
                        </MenuList>
                    </Menu>
                );
            })}

            {/* Recouses menu Resources */}

            {resources.map((navItem, i) => {
                return (
                    <Menu key={i}>
                        <MenuButton
                            as={Button}
                            key={navItem.label}
                            // p={2}
                            display="flex"
                            align="center"
                            href={navItem.href ?? "#"}
                            fontSize="14px"
                            fontWeight={500}
                            bg="transparent"
                            color={navbarColor ? "brand.blue" : "brand.white"}
                            _hover={{
                                textDecoration: "none",
                            }}
                            _active={{
                                bg: "transparent",
                            }}
                            rightIcon={<FiChevronDown />}
                        >
                            {navItem.label}
                        </MenuButton>
                        <MenuList bg="transparent" border="none">
                            <Box
                                bgColor="#fff"
                                // maxW="206px"
                                px="16px"
                                // pt="14px"
                                // pb="20px"
                                shadow="2xl"
                                border="1px"
                                borderColor="brand.orange"
                            >
                                {navItem.children &&
                                    navItem.children.map((subMenu, i) => {
                                        return (
                                            <Link
                                                key={i}
                                                href={subMenu.href}
                                                py="12px"
                                                // w="100%"
                                                fontSize="14px"
                                                fontWeight="500"
                                                display="block"
                                                color="brand.deepBlue"
                                                _hover={{
                                                    color: "brand.orange",
                                                }}
                                            >
                                                {subMenu.label}
                                            </Link>
                                        );
                                    })}
                            </Box>
                        </MenuList>
                    </Menu>
                );
            })}

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
        <Stack p={4} display={{ md: "none" }} w="100%">
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
        <Stack spacing={4} w="100%">
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
                flexDir="column"
            >
                {/* Who we are  */}

                {NAV_ITEMS.map((navItem, i) => {
                    return (
                        <Menu key={i} w="100%">
                            <MenuButton
                                as={Button}
                                key={navItem.label}
                                // p={2}
                                display="flex"
                                align="center"
                                href={navItem.href ?? "#"}
                                fontSize="14px"
                                fontWeight={500}
                                bg="transparent"
                                color={
                                    navbarColor ? "brand.blue" : "brand.white"
                                }
                                _hover={{
                                    textDecoration: "none",
                                }}
                                _active={{
                                    bg: "transparent",
                                }}
                                rightIcon={<FiChevronDown />}
                            >
                                {navItem.label}
                            </MenuButton>
                            <MenuList bg="transparent" border="none" w="100%">
                                <Box
                                    bgColor="#fff"
                                    // maxW="206px"
                                    px="16px"
                                    pt="14px"
                                    w="100%"
                                    pb="20px"
                                    shadow="2xl"
                                    border="1px"
                                    borderColor="brand.orange"
                                >
                                    {navItem.children &&
                                        navItem.children.map((subMenu, i) => {
                                            return (
                                                <Link
                                                    key={i}
                                                    href={subMenu.href}
                                                    py="12px"
                                                    // w="100%"
                                                    fontSize="14px"
                                                    fontWeight="500"
                                                    display="block"
                                                    color="brand.deepBlue"
                                                    _hover={{
                                                        color: "brand.orange",
                                                    }}
                                                >
                                                    {subMenu.label}
                                                </Link>
                                            );
                                        })}
                                </Box>
                            </MenuList>
                        </Menu>
                    );
                })}

                {/* Our Service Menu  */}

                {service.map((item, i) => {
                    return (
                        <Menu key={i} overflowY={"auto"}>
                            <MenuButton
                                as={Button}
                                // p={2}
                                display="flex"
                                align="center"
                                href={item.href ?? "#"}
                                fontSize="14px"
                                fontWeight={500}
                                bg="transparent"
                                color={
                                    navbarColor ? "brand.blue" : "brand.white"
                                }
                                _hover={{
                                    textDecoration: "none",
                                }}
                                _active={{
                                    bg: "transparent",
                                }}
                                rightIcon={<FiChevronDown />}
                            >
                                {item.label}
                            </MenuButton>
                            <MenuList
                                w="100%"
                                border="none"
                                bg="transparent"
                                overflowY={"auto"}
                            >
                                <Flex
                                    overflowY={"auto"}
                                    w="100%"
                                    bgColor="#fff"
                                    px="16px"
                                    pt="24px"
                                    pb="20px"
                                    border="1px"
                                    borderColor="brand.orange"
                                    color="brand.blue"
                                    //     flexDir={"column"}
                                    flexWrap={"wrap"}
                                >
                                    {/* Menu 1  */}
                                    <Box
                                        w="100%"
                                        minW="100%"
                                        bgColor="#fff"
                                        px="26px"
                                        pt="14px"
                                        pb="20px"
                                        borderColor="#9299A2"
                                    >
                                        <Text
                                            fontWeight={500}
                                            fontSize={"14px"}
                                        >
                                            {" "}
                                            Vulnerability Assessment
                                        </Text>
                                        {item.children &&
                                            item.children.map((subMenu) => {
                                                return (
                                                    <Link
                                                        key={subMenu.labe}
                                                        href={subMenu.href}
                                                        // py="12px"
                                                        my="8px"
                                                        maxW="195px"
                                                        // w="100%"
                                                        fontSize="14px"
                                                        fontWeight="400"
                                                        display="block"
                                                        color="brand.verylightGray"
                                                        _hover={{
                                                            color: "brand.orange",
                                                        }}
                                                    >
                                                        {subMenu.label}
                                                    </Link>
                                                );
                                            })}
                                    </Box>
                                    {/* Menu 2  */}
                                    <Box
                                        minW="100%"
                                        w="100%"
                                        bgColor="#fff"
                                        px="26px"
                                        pt="14px"
                                        pb="20px"
                                        borderColor="#9299A2"
                                    >
                                        <Text
                                            fontWeight={500}
                                            fontSize={"14px"}
                                        >
                                            {" "}
                                            Security Detection and Response
                                        </Text>
                                        {item.children_2 &&
                                            item.children_2.map((subMenu) => {
                                                return (
                                                    <Link
                                                        key={subMenu.labe}
                                                        href={subMenu.href}
                                                        // py="12px"
                                                        my="8px"
                                                        maxW="195px"
                                                        // w="100%"
                                                        fontSize="14px"
                                                        fontWeight="400"
                                                        display="block"
                                                        color="brand.verylightGray"
                                                        _hover={{
                                                            color: "brand.orange",
                                                        }}
                                                    >
                                                        {subMenu.label}
                                                    </Link>
                                                );
                                            })}
                                    </Box>

                                    {/* Menu 3  */}
                                    <Box
                                        w="100%"
                                        minW="100%"
                                        bgColor="#fff"
                                        px="26px"
                                        pt="14px"
                                        pb="20px"
                                    >
                                        <Text
                                            fontWeight={500}
                                            fontSize={"14px"}
                                        >
                                            Vulnerability Assessment
                                        </Text>
                                        {item.children &&
                                            item.children.map((subMenu) => {
                                                return (
                                                    <Link
                                                        key={subMenu.labe}
                                                        href={subMenu.href}
                                                        // py="12px"
                                                        my="8px"
                                                        maxW="195px"
                                                        // w="100%"
                                                        fontSize="14px"
                                                        fontWeight="400"
                                                        display="block"
                                                        color="brand.verylightGray"
                                                        _hover={{
                                                            color: "brand.orange",
                                                        }}
                                                    >
                                                        {subMenu.label}
                                                    </Link>
                                                );
                                            })}
                                    </Box>
                                </Flex>
                            </MenuList>
                        </Menu>
                    );
                })}

                {/* Recouses menu Resources */}

                {resources.map((navItem, i) => {
                    return (
                        <Menu key={i}>
                            <MenuButton
                                as={Button}
                                key={navItem.label}
                                // p={2}
                                display="flex"
                                align="center"
                                href={navItem.href ?? "#"}
                                fontSize="14px"
                                fontWeight={500}
                                bg="transparent"
                                color={
                                    navbarColor ? "brand.blue" : "brand.white"
                                }
                                _hover={{
                                    textDecoration: "none",
                                }}
                                _active={{
                                    bg: "transparent",
                                }}
                                rightIcon={<FiChevronDown />}
                            >
                                {navItem.label}
                            </MenuButton>
                            <MenuList bg="transparent" border="none">
                                <Box
                                    bgColor="#fff"
                                    // maxW="206px"
                                    px="16px"
                                    // pt="14px"
                                    // pb="20px"
                                    shadow="2xl"
                                    border="1px"
                                    borderColor="brand.orange"
                                >
                                    {navItem.children &&
                                        navItem.children.map((subMenu, i) => {
                                            return (
                                                <Link
                                                    key={i}
                                                    href={subMenu.href}
                                                    py="12px"
                                                    // w="100%"
                                                    fontSize="14px"
                                                    fontWeight="500"
                                                    display="block"
                                                    color="brand.deepBlue"
                                                    _hover={{
                                                        color: "brand.orange",
                                                    }}
                                                >
                                                    {subMenu.label}
                                                </Link>
                                            );
                                        })}
                                </Box>
                            </MenuList>
                        </Menu>
                    );
                })}
            </Flex>
        </Stack>
    );
};

// This are the nav Items

const NAV_ITEMS = [
    {
        label: "Who We Are",
        href: "#",
        children: [
            {
                label: "About Us",
                href: "/about",
            },
            {
                label: "Why Choose Us",
                href: "/about",
            },
            {
                label: "Our Client Portfolio",
                href: "/#portfolio",
            },

            {
                label: "Our Vendor Partners",
                href: "/#portfolio",
            },
        ],
    },
];

const service = [
    {
        label: "Our Services",
        href: "#",
        children: [
            {
                label: "Web and Mobile Application Testing",
                href: "/service#web",
            },
            {
                label: "Internal and External Infrastructure Testing",
                href: "/service#network",
            },
            {
                label: "Cloud Configuration Assessment",
                href: "/service#cloud",
            },

            {
                label: "Network Devices Assessment",
                href: "/service#device",
            },
            {
                label: "Phishing and Social Engineering Assessment",
                href: "/service#assesment",
            },
        ],

        children_2: [
            {
                label: "Security Monitoring",
                href: "/service#monitoring",
            },
            {
                label: "Detection and Response",
                href: "/service#monitoring",
            },
            {
                label: "Value Added System Integration",
                href: "/service#valueIntegration",
            },

            {
                label: "Managed Security Services",
                href: "/service#manageSec",
            },
            {
                label: "Threat Intelligence Services",
                href: "/service#intelligence",
            },
        ],

        children_3: [
            {
                label: "Web and Mobile Application Testing",
                href: "#",
            },
            {
                label: "Internal and External Infrastructure Testing",
                href: "#",
            },
            {
                label: "Cloud Configuration Assessment",
                href: "#",
            },

            {
                label: "Network Devices Assessment",
                href: "#",
            },
            {
                label: "Phishing and Social Engineering Assessment",
                href: "#",
            },
        ],
    },
];

const resources = [
    {
        label: "Resources",
        href: "#",
        children: [
            {
                label: "Blog",
                href: "/blog",
            },
            {
                label: "White Papers",
                href: "#",
            },
            {
                label: "Security News",
                href: "#",
            },
        ],
    },
];
