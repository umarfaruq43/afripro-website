import React from "react";
import {
    Flex,
    Box,
    Text,
    Icon,
    SimpleGrid,
    Image,
    Divider,
} from "@chakra-ui/react";
import ScreenWidth from "../../Layout/ScreenWidth";

const SecurityDetection = () => {
    return (
        <Box id="detect">
            <ScreenWidth>
                <Detection />
                <Value mt={["10px", null, "-30px"]} />
                <ManageSecurity mt={["10px", null, "-30px"]} />
                <ThreatSecurity mt={["10px", null, "-30px"]} />
                <IncidentResponse mt={["10px", null, "10px"]} />
            </ScreenWidth>
        </Box>
    );
};

export default SecurityDetection;

const Detection = () => {
    return (
        <Flex
            flexDir={["column-reverse", null, "row"]}
            justify="space-between"
            align="center"
            gap="32px"
            py={["20px", null, "60px"]}
            id="monitoring"
        >
            <Box w={["100%", null, "50%"]}>
                {" "}
                <Box
                    maxW={["100%", null, "576px"]}
                    fontSize={["16px", null, "18px"]}
                >
                    <Text fontWeight="400" fontSize={["xl2", null, "4l"]}>
                        Security Monitoring, Detection & Response
                    </Text>

                    <Box fontSize="18px" mt="24px">
                        <Text align="justify">
                            With our security monitoring service, we help
                            organizations develop an effective security
                            monitoring processes which incorporates people,
                            processes, and technologies. At Afri-Pro, we can
                            help your organization with analysing your needs and
                            requirements, choosing the right technology to meet
                            your business needs, deployment, configuration, and
                            integration of the monitoring technologies with your
                            existing IT and security assets to ensure there is
                            comprehensive coverage for your security monitoring
                            and detection process. In addition, we also offer
                            value added first line support to our clients across
                            different security technologies through our managed
                            Security and SOC services team. As a value-added
                            partner of the leading technologies vendors such as
                            Microsoft, Splunk, IBM, Microfocus, Rapid 7,
                            Sumologic, AT&T, Fortinet etc, our team of
                            consultants have experience and hands on skills to
                            implement and manage these technologies
                        </Text>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Image src="images/service/security.svg" alt="Future Image" />
            </Box>
        </Flex>
    );
};

const ManageSecurity = ({ ...props }) => {
    return (
        <Flex
            {...props}
            flexDir={["column", null, "row"]}
            justify="space-between"
            align="center"
            gap="32px"
            id="manageSec"
        >
            <Box w={["100%", null, "50%"]}>
                <Box
                    maxW={["100%", null, "576px"]}
                    fontSize={["16px", null, "18px"]}
                >
                    <Text
                        align="justify"
                        fontWeight="400"
                        fontSize={["xl2", null, "4l"]}
                    >
                        Managed Security Services
                    </Text>

                    <Box fontSize="18px">
                        <Text align="justify" mt="24px">
                            We understand that the overhead cost and investment
                            of comprehensively managing security in-house can be
                            a burden and make security management quite
                            ineffective and daunting for most organizations. In
                            instances where you do not have enough internal
                            resources, time or skillset required for adequate
                            Cyber security management, Afri-Pro services can
                            help with managing your organization’s security from
                            our certified 24/7 SOC to relieve your stretched
                            team of the responsibilities of day-to-day security
                            management and focus on value-added core business
                            operation activities.
                        </Text>
                        <Text align="justify" mt="8px">
                            Afri-Pro Services provides a range of managed
                            services delivered from our 24/7 Security Operations
                            Centre (SOC) called
                            <Text align="justify" as="span" fontWeight="bold">
                                “Logik Lab”
                            </Text>
                            .
                        </Text>
                    </Box>
                </Box>
            </Box>

            <Box>
                <Image src="images/service/manage.svg" alt="Future Image" />
            </Box>
        </Flex>
    );
};

const Value = ({ ...props }) => {
    return (
        <Flex
            {...props}
            flexDir={["column", null, "row"]}
            justify="space-between"
            align="center"
            gap="32px"
            id="valueIntegration"
        >
            <Box>
                <Image src="images/service/value.svg" alt="value Image" />
            </Box>

            <Box w={["100%", null, "50%"]}>
                <Box
                    maxW={["100%", null, "576px"]}
                    fontSize={["16px", null, "18px"]}
                >
                    <Text
                        align="justify"
                        fontWeight="400"
                        fontSize={["xl2", null, "4l"]}
                    >
                        Value Added System Integration
                    </Text>

                    <Box fontSize="18px">
                        <Text align="justify" mt="24px">
                            As a value-added authorized partner to some of the
                            leading security technology vendors, we help our
                            clients with the deployment, configuration and
                            implementation of various cyber security technology
                            controls, integration with the required IT assets,
                            and legacy systems to help our client’s meet their
                            both standard and non-standard security
                            requirements.
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
};

const ThreatSecurity = ({ ...props }) => {
    return (
        <Flex
            {...props}
            flexDir={["column-reverse", null, "row"]}
            justify="space-between"
            align="center"
            gap="32px"
        >
            <Box>
                <Image src="images/service/treat.svg" alt="Future Image" />
            </Box>
            <Box w={["100%", null, "50%"]}>
                <Box
                    maxW={["100%", null, "576px"]}
                    fontSize={["16px", null, "18px"]}
                >
                    <Text
                        align="justify"
                        fontWeight="400"
                        fontSize={["xl2", null, "4l"]}
                    >
                        Threat Intelligence Services
                    </Text>

                    <Box fontSize="18px">
                        <Text align="justify" mt="24px">
                            Our Threat Intelligence service delivers knowledge,
                            actionable information, and data about security
                            threats to our clients to help them understand
                            attack Tactics, Techniques and Procedures (TTPs) and
                            take proactive actions to protect their IT assets.
                            We deploy and implement the leading threat
                            intelligence platforms and integrate both opensource
                            and commercial threat feeds to enrich our client’s
                            intelligence to enable better decision making and
                            improve security technology capabilities to reduce
                            risk and possibilities of being compromised.
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
};

const IncidentResponse = ({ ...props }) => {
    return (
        <Flex
            {...props}
            flexDir={["column", null, "row"]}
            justify="space-between"
            align="center"
            gap="32px"
        >
            <Box w={["100%", null, "50%"]}>
                <Box
                    maxW={["100%", null, "576px"]}
                    fontSize={["16px", null, "18px"]}
                >
                    <Text
                        align="justify"
                        fontWeight="400"
                        fontSize={["xl2", null, "4l"]}
                    >
                        Incident Response & Forensic Services
                    </Text>

                    <Box fontSize="18px">
                        <Text align="justify" mt="24px">
                            {`Afri-Pro's`} Incident Response (IR) and digital
                            forensics team delivers cutting edge services of
                            cyber security incident response through our expert
                            CIRT team to organizations to help minimize and
                            recover from the impact of incidents to business
                            operation and significantly reduce turnaround time.
                        </Text>
                        <Text align="justify" mt="8px">
                            Our forensic services are delivered by a team of
                            forensic experts, experienced security engineers,
                            incident responders, malware, and reverse
                            engineering specialists with years of experience
                            across several IT and security domains. Incident
                            response and forensics cases are knowledge-intensive
                            and rely heavily on having experienced, trained
                            professionals at hand.
                        </Text>

                        <Text align="justify" mt="8px">
                            All our incident response engagements are planned,
                            delivered, and properly documented to support
                            business recovery actions taken by our clients after
                            the investigation is over.
                        </Text>
                    </Box>
                </Box>
            </Box>

            <Box>
                <Image src="images/service/tretSec.svg" alt="Future Image" />
            </Box>
        </Flex>
    );
};
