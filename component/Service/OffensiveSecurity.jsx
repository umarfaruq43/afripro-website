import {
    Flex,
    Box,
    Text,
    Icon,
    SimpleGrid,
    Image,
    Divider,
} from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../../Layout/ScreenWidth";

const OffensiveSecurity = () => {
    return (
        <Box>
            <Box>
                <VulnerabilityAssessments />

                <WebAndMobile mt={["10px", null, "-30px"]} />

                <Network mt={["10px", null, "-30px"]} />

                <Cloud mt={["10px", null, "-30px"]} />
                <Device mt={["10px", null, "-30px"]} />
                <SocialEng mt={["10px", null, "-30px"]} />
                <SecApproach mt={["10px", null, "30px"]} mb="20px" />
            </Box>
        </Box>
    );
};

export default OffensiveSecurity;

const Security = () => {
    return (
        <Flex
            flexDir={["column", null, "row"]}
            justify="space-between"
            align="center"
            gap="80px"
            py={["25px", null, "51px"]}
        >
            <Box w={["100%", null, "50%"]}>
                {" "}
                <Box
                    maxW={["100%", null, "572px"]}
                    fontSize={["16px", null, "18px"]}
                >
                    <Text
                        align="justify"
                        fontWeight="400"
                        textTransform={"uppercase"}
                        fontSize={["xl2", null, "4l"]}
                    >
                        Offensive Security Services
                    </Text>
                    <Text align="justify" mt="24px">
                        At AFRI PRO SERVICES we believe that our clients and
                        employees make our stronghold and when they achieve
                        their ambitions, we do too. To accomplish this we need
                        individuals with creative and innovative solutions who
                        are willing to go the extra mile for their future, our
                        clients and the bank.
                    </Text>
                    <Text align="justify" mt="8px">
                        We promise to provide you with a world of opportunities
                        for personal growth within a culture that is based on
                        co-operation in every section of our business
                        countrywide. We believe that the steps we take together
                        are the ones that take us further.
                    </Text>
                </Box>
            </Box>
            <Box>
                <Image src="images/service/future.png" alt="Future Image" />
            </Box>
        </Flex>
    );
};

const VulnerabilityAssessments = ({ ...others }) => {
    return (
        <Box {...others} id="vulnerability">
            <ScreenWidth>
                <Flex
                    flexDir={["column-reverse", null, "row"]}
                    justify="space-between"
                    align="center"
                    gap="32px"
                >
                    <Box w={["100%", null, "50%"]}>
                        {" "}
                        <Box
                            maxW={["100%", null, "576px"]}
                            fontSize={["16px", null, "18px"]}
                        >
                            <Text
                                align="justify"
                                fontWeight="400"
                                fontSize={["xl2", null, "4l"]}
                            >
                                Vulnerability Assessments
                            </Text>

                            <Text align="justify" mt="16px">
                                Our Vulnerability Assessment service is a
                                non-intrusive, automated, and regular test of
                                our clients IT systems to identify security
                                gaps, loopholes in your systems and networks.
                                The severity and overall risks of these
                                vulnerabilities are then measured and presented
                                to our clients with the applicable
                                recommendations to help remediate the
                                vulnerabilities and protect their organization’s
                                cyber security threats. We can help you identify
                                the known and unknown vulnerabilities before
                                they are discovered and exploited by the threat
                                actors.
                            </Text>
                        </Box>
                    </Box>
                    {/* *****Second Column***** */}
                    <Box>
                        <Image
                            src="images/service/vunerability.svg"
                            alt="Future Image"
                        />
                    </Box>
                </Flex>
            </ScreenWidth>
        </Box>
    );
};

const WebAndMobile = ({ ...others }) => {
    return (
        <Box {...others} id="web">
            <ScreenWidth>
                <Flex
                    flexDir={["column", null, "row"]}
                    justify="space-between"
                    align="center"
                    gap="32px"
                >
                    <Box>
                        <Image
                            src="images/service/webAndMobile.svg"
                            alt="Future Image"
                        />
                    </Box>

                    {/* *****Second Column***** */}

                    <Box w={["100%", null, "50%"]}>
                        {" "}
                        <Box
                            maxW={["100%", null, "576px"]}
                            fontSize={["16px", null, "18px"]}
                        >
                            <Text
                                fontWeight="400"
                                fontSize={["xl2", null, "4l"]}
                            >
                                Web and Mobile Application Testing
                            </Text>

                            <Text align="justify" mt="16px">
                                Our Web and mobile application assessment
                                delivers both authenticated and unauthenticated
                                testing of web and mobile applications to help
                                identify flaws or security gaps that may allow
                                for the security of website or web applications
                                to be compromised, putting sensitive data at
                                risk. This service offering from Afri-Pro
                                services covers Web technologies, mobile
                                applications, APIs and everything in between, we
                                can provide you with extensive testing on all of
                                your application types and corresponding
                                infrastructure.
                            </Text>
                        </Box>
                    </Box>
                </Flex>
            </ScreenWidth>
        </Box>
    );
};

const Network = ({ ...others }) => {
    return (
        <Box {...others} id="network">
            <ScreenWidth>
                <Flex
                    flexDir={["column-reverse", null, "row"]}
                    justify="space-between"
                    align="center"
                    gap="32px"
                >
                    <Box w={["100%", null, "50%"]}>
                        {" "}
                        <Box
                            maxW={["100%", null, "704.24px"]}
                            fontSize={["16px", null, "18px"]}
                        >
                            <Text
                                align="justify"
                                fontWeight="400"
                                fontSize={["xl2", null, "4l"]}
                            >
                                Network Infrastructure Testing
                            </Text>

                            <Text align="justify" mt="16px">
                                Our infrastructure assessment assesses the
                                security posture of internal and external
                                network by assessing whether the perimeter
                                security controls can be compromised, and
                                helping you address and secure any identified
                                vulnerabilities. Our external network assessment
                                evaluates how secure your public facing
                                infrastructure are against potential
                                cyber-attacks.
                            </Text>
                            <Text align="justify" mt="16px">
                                The internal infrastructure testing gives you a
                                full understanding of the potential threats to
                                your internal infrastructure. The test is
                                designed to help you reduce the risks that are
                                posed by individuals who have access to your
                                private internal network. Our consultants will
                                simulate an insider attack to explore how far
                                into your internal infrastructure an insider can
                                get while remaining undetected. The internal
                                network testing will highlight what information
                                can be extracted or accessed from within your
                                private.
                            </Text>
                        </Box>
                    </Box>
                    {/* *****Second Column***** */}

                    <Box>
                        <Image
                            src="images/service/network.svg"
                            alt="Future Image"
                        />
                    </Box>
                </Flex>
            </ScreenWidth>
        </Box>
    );
};

const Cloud = ({ ...others }) => {
    return (
        <Box {...others} id="cloud">
            <ScreenWidth>
                <Flex
                    flexDir={["column", null, "row"]}
                    justify="space-between"
                    align="center"
                    gap="32px"
                >
                    <Box>
                        <Image
                            src="images/service/cloud.svg"
                            alt="Future Image"
                        />
                    </Box>

                    <Box w={["100%", null, "50%"]}>
                        {" "}
                        <Box
                            maxW={["100%", null, "704.24px"]}
                            fontSize={["16px", null, "18px"]}
                        >
                            <Text
                                align="justify"
                                fontWeight="400"
                                fontSize={["xl2", null, "4l"]}
                            >
                                Cloud Configuration
                            </Text>

                            <Text align="justify" mt="16px">
                               
                                With the cloud adoption at the forefront of
                                organization’s digital transformation, we are
                                helping our clients with implementing adequate
                                security controls in their cloud journey. With
                                our cloud configuration assessment service, we
                                assess the configuration and security of your
                                chosen cloud environment to identify and
                                highlight weaknesses that may lead to the
                                compromise of your cloud environment, and
                                systems and infrastructure hosted in your cloud
                                environment. With this service, we review both
                                public and private cloud environment, by
                                focusing on the cloud specific aspects, as well
                                as the applications and. Infrastructure hosted
                                within the cloud instance.
                            </Text>
                        </Box>
                    </Box>
                    {/* *****Second Column***** */}
                </Flex>
            </ScreenWidth>
        </Box>
    );
};

const Device = ({ ...others }) => {
    return (
        <Box {...others} id="device">
            <ScreenWidth>
                <Flex
                    flexDir={["column-reverse", null, "row"]}
                    justify="space-between"
                    align="center"
                    gap="32px"
                >
                    <Box w={["100%", null, "50%"]}>
                        {" "}
                        <Box
                            maxW={["100%", null, "704.24px"]}
                            fontSize={["16px", null, "18px"]}
                        >
                            <Text
                                align="justify"
                                fontWeight="400"
                                fontSize={["xl2", null, "4l"]}
                            >
                                Network Devices Assessment
                            </Text>
                            <Text align="justify" color="" mt="16px">
                                {/* We focus on the configuration review of

				
                                networking devices such as routers, switches,
                                load balancers, firewalls etc, by focusing on
                                the device OS, port security, access control,
                                protocols allowed, device authentication,
                                services running etc. */}
                                Our network device assessment focuses on the
                                configuration review of networking devices such
                                as routers, switches, load balancers, firewalls
                                etc, by focusing on the device OS, port
                                security, access control, protocols allowed,
                                device authentication, services running etc.
                            </Text>

                            <Text align="justify" mt="16px">
                                {/* Our consultants conduct a comprehensive
                                inspection of all the services and software
                                running on the devices, to ensure that OS are
                                updated, required security patches are
                                installed, required access controls are in
                                place, and ports are adequately secured and
                                configured, and only required ports and services
                                are enabled. */}
                                Our consultants conduct a comprehensive
                                inspection of all the services and software
                                running on the devices, to ensure that OS are
                                updated, required security patches are
                                installed, required access controls are in
                                place, and ports are adequately secured and
                                configured, and only required ports and services
                                are enabled.
                            </Text>
                        </Box>
                    </Box>
                    {/* *****Second Column***** */}
                    <Box>
                        <Image
                            src="images/service/device.svg"
                            alt="Future Image"
                        />
                    </Box>
                </Flex>
            </ScreenWidth>
        </Box>
    );
};

const SocialEng = ({ ...others }) => {
    return (
        <Box {...others} id="assesment">
            <ScreenWidth>
                <Flex
                    flexDir={["column", null, "row"]}
                    justify="space-between"
                    align="center"
                    gap="32px"
                >
                    <Box>
                        <Image
                            src="images/service/socialEng.svg"
                            alt="Future Image"
                        />
                    </Box>

                    <Box w={["100%", null, "50%"]}>
                        {" "}
                        <Box
                            maxW={["100%", null, "704.24px"]}
                            fontSize={["16px", null, "18px"]}
                        >
                            <Text
                                align="justify"
                                fontWeight="400"
                                fontSize={["xl2", null, "4l"]}
                            >
                                Social Engineering Assessment
                            </Text>

                            <Text align="justify" mt="16px">
                                With our Social Engineering Assessment Module,
                                we help you assess the human vulnerabilities and
                                identify the information security risks
                                associated to members of your staff and
                                weaknesses in your organizational processes. Our
                                consultants use a combination of technical and
                                social techniques to get confidential and
                                sensitive information from your organization’s
                                staff members, and contractors.
                            </Text>
                        </Box>
                    </Box>
                    {/* *****Second Column***** */}
                </Flex>
            </ScreenWidth>
        </Box>
    );
};

const SecApproach = ({ ...others }) => {
    return (
        <Box {...others} id="device">
            <ScreenWidth>
                <Flex
                    flexDir={["column-reverse", null, "row"]}
                    justify="space-between"
                    //     align="center"
                    gap="32px"
                >
                    <Box w={["100%", null, "50%"]}>
                        {" "}
                        <Box
                            maxW={["100%", null, "704.24px"]}
                            fontSize={["16px", null, "18px"]}
                        >
                            <Text
                                fontWeight="400"
                                fontSize={["xl2", null, "32px"]}
                            >
                                Our Security Assessment Reporting Approach
                            </Text>
                            <Text align="justify" color="" mt="16px">
                                Upon completion of our security assessment
                                projects, a comprehensively documented report
                                that shows the findings; detailing the
                                description of the vulnerabilities identified,
                                the consequences of the vulnerabilities if
                                exploited, our recommendation for closing the
                                gaps, and evidence of the exploitation of the
                                vulnerabilities identified.
                            </Text>

                            <Text align="justify" mt="16px">
                                Our report is addressed to 3 relevant
                                stakeholders’ levels within your organization.
                            </Text>

                            <Box
                                borderLeft="1px"
                                borderColor={"brand.orange"}
                                pl={["16px", null, "24px"]}
                                py="24px"
                                mt="24px"
                            >
                                <Box>
                                    <Text align="justify" fontSize="24px">
                                        Executive Management
                                    </Text>
                                    <Text align="justify" mt="16px">
                                        This section of our report is aimed at
                                        decision makers within an organization
                                        who need to understand the overall
                                        security posture of an organization. Our
                                        report gives them a non-technical
                                        overview and summary of what security
                                        threats are facing the organization, and
                                        the consequences of the vulnerabilities
                                        to the organization if exploited by
                                        threat actors. The executives can
                                        provide the resources needed to close
                                        the gaps and mitigate against possible
                                        attacks that could arise from the
                                        vulnerabilities.
                                    </Text>
                                </Box>

                                <Box mt="26px">
                                    <Text align="justify" fontSize="24px">
                                        Technical Management
                                    </Text>
                                    <Text align="justify" mt="16px">
                                        This section of the report is addressed
                                        to the technical managers who are
                                        responsible for the identification and
                                        managing the implementation of the
                                        appropriate fixes and corrective actions
                                        needed to close the gap, and mitigate
                                        the vulnerabilities
                                    </Text>
                                </Box>

                                <Box mt="26px">
                                    <Text align="justify" fontSize="24px">
                                        System Administrators
                                    </Text>
                                    <Text align="justify" mt="16px">
                                        This section of the report is aimed at
                                        technical operational team, who are
                                        responsible for the implementation of
                                        identified fixes/ corrective actions.
                                    </Text>
                                </Box>
                            </Box>
                            <Text align="justify" mt="24px">
                                Our report offers you a complete overview of the
                                security posture of your organization, threats
                                and expert advice on the mitigation measures,
                                identified risks, and a step-by-step instruction
                                for remediation of security issues.
                            </Text>
                        </Box>
                    </Box>
                    {/* *****Second Column***** */}
                    <Box>
                        <Image
                            src="images/service/device.svg"
                            alt="Future Image"
                        />
                    </Box>
                </Flex>
            </ScreenWidth>
        </Box>
    );
};
