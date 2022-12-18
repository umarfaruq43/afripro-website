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
import React, { useState } from "react";
import {
    BsArrowRight,
    BsFillArrowDownSquareFill,
    BsFillArrowRightSquareFill,
    BsFillArrowUpSquareFill,
} from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import ScreenWidth from "../Layout/ScreenWidth";

const Service = () => {
    const [active, setActive] = useState(1);
    const [activeContent, setActiveContent] = useState(serviceDetails_1);
    const handleActive = (activeNumber) => {
        setActive(activeNumber);
    };
    return (
        <Box
            pt="24"
            mb=""
            bgImage="/images/serviceIlustration.svg"
            bgSize={["100px", null, "200px"]}
            bgRepeat="no-repeat"
            style={{ backgroundPosition: "top Right" }}
        >
            <ScreenWidth>
                <Box>
                    <Text
                        align="justify"
                        fontSize={["sm", null, "36px"]}
                        color="brand.veryDeepBlue"
                        fontWeight={700}
                        textAlign="center"
                    >
                        Our services
                    </Text>
                    <Text
                        align="justify"
                        mt="8px"
                        // fontWeight="700"
                        fontSize={["16px", null, "20px"]}
                        textAlign="center"
                    >
                        Providing best Cybersecurity solutions
                    </Text>
                </Box>
                <Box pt="10">
                    <ServiceNav active={active} handleActive={handleActive} />
                    <ServiceContent
                        active={active}
                        activeContent={activeContent}
                        setActiveContent={setActiveContent}
                    />
                </Box>
            </ScreenWidth>
        </Box>
    );
};

export default Service;

// ******** Service Content Begins ***********

const ServiceNav = ({ active, handleActive }) => {
    return (
        <Box maxW="994px" mx="auto">
            <SimpleGrid minChildWidth={["300px"]} gap="5">
                <Button
                    mb="-3px"
                    h="54px"
                    py="16px"
                    px={["20px", null, "36px"]}
                    bgColor="transparent"
                    _hover={{ bgColor: "none" }}
                    _focus={{ bgColor: "transparent" }}
                    borderBottom={active == 1 ? "2px" : "2px"}
                    borderColor={
                        active == 1 ? "brand.orange" : "brand.verylightGray"
                    }
                    fontWeight="500"
                    borderRadius="0"
                    onClick={() => handleActive(1)}
                >
                    {active == 1 ? (
                        <Icon
                            as={BsFillArrowUpSquareFill}
                            width="22px"
                            height="22px"
                            mr="8px"
                            color="brand.orange"
                        />
                    ) : (
                        <Icon
                            as={BsFillArrowDownSquareFill}
                            width="22px"
                            height="22px"
                            mr="8px"
                            color="brand.verylightGray"
                        />
                    )}
                    <Text
                        align="justify"
                        fontSize="18px"
                        color={
                            active == 1 ? "brand.orange" : "brand.verylightGray"
                        }
                    >
                        Offensive Security Services
                    </Text>
                </Button>

                <Button
                    mb="-3px"
                    h="54px"
                    py="16px"
                    //     px={["20px", null, "36px"]}

                    bgColor="transparent"
                    _hover={{ bgColor: "none" }}
                    _focus={{ bgColor: "transparent" }}
                    borderBottom={active == 2 ? "2px" : "2px"}
                    borderColor={
                        active == 2 ? "brand.orange" : "brand.verylightGray"
                    }
                    fontWeight="500"
                    borderRadius="0"
                    onClick={() => handleActive(2)}
                >
                    {active == 2 ? (
                        <Icon
                            as={BsFillArrowUpSquareFill}
                            width="22px"
                            height="22px"
                            mr="8px"
                            color="brand.orange"
                        />
                    ) : (
                        <Icon
                            as={BsFillArrowDownSquareFill}
                            width="22px"
                            height="22px"
                            mr="8px"
                            color="brand.verylightGray"
                        />
                    )}
                    <Text
                        align="justify"
                        fontSize="18px"
                        color={
                            active == 2 ? "brand.orange" : "brand.verylightGray"
                        }
                    >
                        Security Detection & Response
                    </Text>
                </Button>

                <Button
                    mb="-3px"
                    h="54px"
                    py="16px"
                    //     px={["20px", null, "36px"]}

                    bgColor="transparent"
                    _hover={{ bgColor: "none" }}
                    _focus={{ bgColor: "transparent" }}
                    borderBottom={active == 3 ? "2px" : "2px"}
                    borderColor={
                        active == 3 ? "brand.orange" : "brand.verylightGray"
                    }
                    fontWeight="500"
                    borderRadius="0"
                    onClick={() => handleActive(3)}
                >
                    {active == 3 ? (
                        <Icon
                            as={BsFillArrowUpSquareFill}
                            width="22px"
                            height="22px"
                            mr="8px"
                            color="brand.orange"
                        />
                    ) : (
                        <Icon
                            as={BsFillArrowDownSquareFill}
                            width="22px"
                            height="22px"
                            mr="8px"
                            color="brand.verylightGray"
                        />
                    )}
                    <Text
                        align="justify"
                        fontSize="18px"
                        color={
                            active == 3 ? "brand.orange" : "brand.verylightGray"
                        }
                    >
                        Security Advisory & Compliance
                    </Text>
                </Button>
            </SimpleGrid>
        </Box>
    );
};

// Service content code begins

const ServiceContent = ({ active, activeContent, setActiveContent }) => {
    active == 1 ? setActiveContent(serviceDetails_1) : null;
    active == 2 ? setActiveContent(serviceDetails_2) : null;
    active == 3 ? setActiveContent(serviceDetails_3) : null;
    return (
        <Box mt="10">
            <SimpleGrid minChildWidth={["320px", null, "300px"]} gap="32px">
                {activeContent.map(({ title, href, details, image }, i) => {
                    return (
                        // <Box >
                        <ServiceCard
                            title={title}
                            href={href}
                            key={i}
                            details={details}
                            image={image}
                        />
                        // </Box>
                    );
                })}
            </SimpleGrid>
        </Box>
    );
};

// ******** Service Content Card******************

const ServiceCard = ({ title, href, details, image }) => {
    return (
        <Box
            p="7"
            maxW="384px"
            w="100%"
            _hover={{
                shadow: "0px 12px 42px -6px rgba(24, 39, 75, 0.16)",
            }}
            shadow={[
                "0px 12px 42px -6px rgba(24, 39, 75, 0.16)",
                "none",
                "none",
            ]}
            mx="auto"
            fontSize="18"
            cursor="pointer"
            border="1px"
            borderColor={"brand.borderStroke"}
        >
            <Image src={image} alt="service Illustration Image" />
            <Text
                
                mt="40px"
                mb=""
                fontWeight="400"
                fontSize="20px"
                color="brand.cardColor"
                minH="52px"
            >
                {title}
            </Text>

            <Box mt="12">
                <Link
                    href={href ?? "#"}
                    display="flex"
                    alignItems="center"
                    fontSize="16"
                    fontWeight="500"
                    _hover={{ textDecoration: "none" }}
                >
                    Learn more
                    <Icon as={BsArrowRight} color="brand.blue" ml="9px" />
                </Link>
            </Box>
        </Box>
    );
};

const serviceDetails_1 = [
    {
        title: "Vulnerability Assessments",
        details:
            "Our Vulnerability Assessment service is a non-intrusive, automated, and regular test of our clients IT systems to identify security gaps, loopholes in your systems and networks.  ",
        href: "/service#vulnerability",
        image: "images/vulnerability.svg",
    },
    {
        title: "Web and Mobile Application Testing",
        image: "images/WMTesting.svg",
        details:
            "We deliver both authenticated and unauthenticated testing of web and mobile applications to help identify flaws or security gaps that may allow for the security of website or web applications to be compromised, putting sensitive data at risk. ",
        href: "/service#web",
    },
    {
        title: "Network Infrastructure Testing",
        details:
            "Our infrastructure assessment assesses the security posture of internal and external network by assessing whether the perimeter security controls can be compromised, and helping you address and secure any identified vulnerabilities. ",
        href: "/service#network",
        image: "images/networkInfrastructure.svg",
    },
    {
        title: "Cloud Configuration Assessment",
        details:
            "With the cloud adoption at the forefront of organization’s digital transformation, we are helping our clients with implementing adequate security controls in their cloud journey.",
        href: "/service#cloud",
        image: "images/cloudConfiguration.svg",
    },
    {
        title: "Network Devices Assessment",
        details:
            "We focus on the configuration review of networking devices such as routers, switches, load balancers, firewalls etc, by focusing on the device OS, port security, access control, protocols allowed, device authentication, services running etc.",
        href: "/service#device",
        image: "images/networkDevicesAssessment.svg",
    },
    {
        title: "Social Engineering Assessment",
        details: "",
        href: "/service#social",
        image: "images/socialEng.svg",
    },
    {
        title: "Our Security Assessment Reporting Approach",
        details: "",
        href: "/service#approach",
        image: "images/secApproach.svg",
    },
];

const serviceDetails_2 = [
    {
        title: "Security Monitoring, Detection & Response",
        image: "images/WMTesting.svg",
        details:
            "With our security monitoring service, we help organizations develop an effective security monitoring processes which incorporates people, processes, and technologies. At Afri-Pro, we can help your organization with analysing your needs and requirements, choosing the right technology to meet your business needs, deployment, configuration, and integration of the monitoring technologies with your existing IT and security assets to ensure there is comprehensive coverage for your security monitoring and detection process. In addition, we also offer value added first line support to our clients across different security technologies through our managed Security and SOC services team. As a value-added partner of the leading technologies vendors such as Microsoft, Splunk, IBM, Microfocus, Rapid 7, Sumologic, AT&T, Fortinet etc, our team of consultants have experience and hands on skills to implement and manage these technologies",
        href: "/service#detect",
    },
    {
        title: "Value Added System Integration",
        details:
            "As a value-added authorized partner to some of the leading security technology vendors, we help our clients with the deployment, configuration and implementation of various cyber security technology controls, integration with the required IT assets, and legacy systems to help our client’s meet their both standard and non-standard security requirements.",
        href: "/service#detect",
        image: "images/networkInfrastructure.svg",
    },
    {
        title: "Managed Security Services",
        details:
            "We understand that the overhead cost and investment of comprehensively managing security in-house can be a burden and make security management quite ineffective and daunting for most organizations. In instances where you do not have enough internal resources, time or skillset required for adequate Cyber security management, Afri-Pro services can help with managing your organization’s security from our certified 24/7 SOC to relieve your stretched team of the responsibilities of day-to-day security management and focus on value-added core business operation activities. Afri-Pro Services provides a range of managed services delivered from our 24/7 Security  ",
        href: "/service#detect",
        image: "images/cloudConfiguration.svg",
    },
    {
        title: "Threat Intelligence Services",
        details:
            "Our Threat Intelligence service delivers knowledge, actionable information, and data about security threats to our clients to help them understand attack Tactics, Techniques and Procedures (TTPs) and take proactive actions to protect their IT assets. We deploy and implement the leading threat intelligence platforms and integrate both opensource and commercial threat feeds to enrich our client’s intelligence to enable better decision making and improve security technology capabilities to reduce risk and possibilities of being compromised.",
        href: "/service#detect",
        image: "images/networkDevicesAssessment.svg",
    },
    {
        title: "Incident Response & Forensic Services",
        details:
            "Afri-Pro's Incident Response (IR) and digital forensics team delivers cutting edge services of cyber security incident response through our expert CIRT team to organizations to help minimize and recover from the impact of incidents to business operation and significantly reduce turnaround time.",
        href: "/service#detect",
        image: "images/vulnerability.svg",
    },
];

const serviceDetails_3 = [
    {
        title: "Awareness Training",

        details:
            "Reduce the likelihood of data breaches by training your staff to recognise attacks.",
        href: "/service#advisory",
        image: "images/networkDevicesAssessment.svg",
    },

    {
        title: "Cyber Essentials & Cyber Essential [Plus]",
        image: "images/WMTesting.svg",
        details:
            "Audit your internal IT security so you can start with a strong cybersecurity foundation.",
        href: "/service#advisory",
    },

    {
        title: "Threat & Risk Assessment",
        details:
            "Refine your cybersecurity strategy by identifying key assets and the threats they face. ",
        href: "/service#advisory",
        image: "images/networkInfrastructure.svg",
    },

    {
        title: "Cyber Advice and Guidance",
        details:
            "Get expert advice on how to best fill the gaps in your organisation’s cyber-defence",
        href: "/service#advisory",
        image: "images/cloudConfiguration.svg",
    },
];
