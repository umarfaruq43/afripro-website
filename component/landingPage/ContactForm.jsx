import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillCaretDown, AiFillTaobaoSquare } from "react-icons/ai";
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Box,
    Text,
    Flex,
    Select,
    Textarea,
    Checkbox,
    useToast,
} from "@chakra-ui/react";
import { ButtonFill } from "../Buttons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactForm = () => {
    const toast = useToast();
    const [phone, setPhone] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState(false);
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            firstname: "",
            lastname: "",
            subject: 0,
            message: "",
            phonenumber: "",
            email: "",
        },
    });

    function onSubmit(values) {
        values.phonenumber = phone;
        // console.log(values);

        if (
            values.firstname == "" ||
            values.lastname == "" ||
            values.subject == 0 ||
            values.message == "" ||
            values.phonenumber == "" ||
            values.email == ""
        ) {
            toast({
                title: "Unable to Submit Form.",
                description: "Please fill the form correctly",
                status: "error",
                duration: 4000,
                position: "top",
                isClosable: true,
            });
        } else {
            setSubmitting(true);

            fetch(
                "https://demoafriproadmin.statainsight.com/api/contact-form",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                    body: JSON.stringify(values),
                }
            )
                .then((response) => response.json())

                // SEnd result to the Api
                .then((data) => {
                    toast({
                        title: "Form Submitted Successfully",
                        description: "You will get a respons ASAP",
                        status: "success",
                        duration: 4000,
                        isClosable: true,
                        position: "top",
                    });
                    setSubmitting(false);

                    setFormStatus(true); // means submitted succesfully
                })
                .catch((data) => {
                    toast({
                        title: `${
                            data.message == "Failed to fetch"
                                ? "Unable to Submit Form"
                                : data.message
                        }`,
                        status: "error",
                        position: "top",
                        isClosable: true,
                    });
                    setSubmitting(false);
                });
        }
    }

    useEffect(() => {
        if (formStatus) {
            reset({
                firstname: "",
                lastname: "",
                subject: 0,
                message: "",
                phonenumber: "",
                email: "",
            });
            setPhone("");
        }
    }, [formStatus, reset]);

    return (
        <Box
            py="10"
            px={["12px", null, "8"]}
            bgColor="brand.white"
            color="brand.blue"
            maxW="672"
        >
            <Box>
                <Text
                    align="justify"
                    fontWeight="700"
                    fontSize={["xl", "2xl", "4l"]}
                >
                    Contact Us
                </Text>
                <Text
                    align="justify"
                    fontSize={["sm", "md", "lg"]}
                    color="brand.lightGray"
                >
                    Gain access to our advanced Advanced Cybersecurity Services
                </Text>
                <Box>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* ******** First Row******* */}
                        <Flex
                            mt="4"
                            gap={["16px", "32px"]}
                            flexDir={["column", "row"]}
                        >
                            <FormControl isInvalid={errors.firstname}>
                                <FormLabel
                                    htmlFor="firstname"
                                    color="brand.verylightGray"
                                    fontSize={["sm", null, "md"]}
                                    fontWeight="400"
                                >
                                    First name
                                </FormLabel>
                                <Input
                                    id="firstname"
                                    placeholder="First name"
                                    {...register("firstname", {
                                        required: "This is required",
                                        minLength: {
                                            value: 4,
                                            message:
                                                "Minimum length should be 4",
                                        },
                                    })}
                                    py="13px"
                                    px="16px"
                                    bgColor="brand.dimWhite"
                                    _focusVisible={{
                                        border: "1px",
                                        borderColor: "brand.veryDimWhite",
                                    }}
                                    borderRadius="0"
                                    borderColor="brand.veryDimWhite"
                                    border="1px"
                                    outline="none"
                                />
                                <FormErrorMessage>
                                    {errors.firstname &&
                                        errors.firstname.message}
                                </FormErrorMessage>
                            </FormControl>
                            {/* ***** Last Name ***** */}
                            <FormControl isInvalid={errors.lastname}>
                                <FormLabel
                                    htmlFor="lastname"
                                    color="brand.verylightGray"
                                    fontSize={["sm", null, "md"]}
                                    fontWeight="400"
                                >
                                    Last name
                                </FormLabel>
                                <Input
                                    id="lastname"
                                    placeholder="Last name"
                                    {...register("lastname", {
                                        required: "This is required",
                                        minLength: {
                                            value: 4,
                                            message:
                                                "Minimum length should be 4",
                                        },
                                    })}
                                    py="13px"
                                    px="16px"
                                    bgColor="brand.dimWhite"
                                    _focusVisible={{
                                        border: "1px",
                                        borderColor: "brand.veryDimWhite",
                                    }}
                                    borderRadius="0"
                                    borderColor="brand.veryDimWhite"
                                    border="1px"
                                    outline="none"
                                />
                                <FormErrorMessage>
                                    {errors.lastname && errors.lastname.message}
                                </FormErrorMessage>
                            </FormControl>
                        </Flex>
                        {/* ****SECOND ROW***** */}
                        <Flex
                            mt="4"
                            gap={["16px", "32px"]}
                            flexDir={["column", "row"]}
                        >
                            <FormControl isInvalid={errors.email}>
                                <FormLabel
                                    htmlFor="email"
                                    color="brand.verylightGray"
                                    fontSize={["sm", null, "md"]}
                                    fontWeight="400"
                                >
                                    Business Email
                                </FormLabel>
                                <Input
                                    id="email"
                                    placeholder="Business Email"
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        minLength: {
                                            value: 4,
                                            message:
                                                "Minimum length should be 4",
                                        },
                                    })}
                                    py="13px"
                                    px="16px"
                                    bgColor="brand.dimWhite"
                                    _focusVisible={{
                                        border: "1px",
                                        borderColor: "brand.veryDimWhite",
                                    }}
                                    borderRadius="0"
                                    borderColor="brand.veryDimWhite"
                                    border="1px"
                                    outline="none"
                                />
                                <FormErrorMessage>
                                    {errors.email && errors.email.message}
                                </FormErrorMessage>
                            </FormControl>
                            {/* ***** Phome number  ***** */}

                            <FormControl>
                                <FormLabel
                                    htmlFor="email"
                                    color="brand.verylightGray"
                                    fontSize={["sm", null, "md"]}
                                    fontWeight="400"
                                >
                                    Contact Tel
                                </FormLabel>
                                <PhoneInput
                                    country={"us"}
                                    value={phone}
                                    onChange={(phone) => setPhone(phone)}
                                />
                            </FormControl>
                        </Flex>
                        {/* ************DIscussion*********** */}

                        <FormControl mt="6">
                            <Select
                                icon={<AiFillCaretDown />}
                                {...register("subject")}
                                bgColor="brand.dimWhite"
                                _focusVisible={{
                                    border: "1px",
                                    borderColor: "brand.veryDimWhite",
                                }}
                                borderRadius="0"
                                borderColor="brand.veryDimWhite"
                                border="1px"
                                outline="none"
                                color="#6B6B86"
                                px=""
                            >
                                <option value="0">
                                    I would like to discuss....
                                </option>
                                <option value="BugReport">Report a bug</option>
                                <option value="Security">
                                    I need to secure my app
                                </option>{" "}
                                <option value="advice">
                                    Please I need some advice.
                                </option>
                            </Select>
                        </FormControl>

                        {/* ***** Message ******** */}

                        <FormControl mt="4" isInvalid={errors.message}>
                            <FormLabel
                                htmlFor="message"
                                color="brand.verylightGray"
                                fontSize={["sm", null, "md"]}
                                fontWeight="400"
                            >
                                Your Message
                            </FormLabel>
                            <Text
                                align="justify"
                                area
                                id="message"
                                placeholder="Describe your needs (optional)"
                                type="tel"
                                h="104"
                                {...register("message")}
                                py="13px"
                                px="16px"
                                bgColor="brand.dimWhite"
                                _focusVisible={{
                                    border: "1px",
                                    borderColor: "brand.veryDimWhite",
                                }}
                                borderRadius="0"
                                borderColor="brand.veryDimWhite"
                                border="1px"
                                outline="none"
                            />
                            <FormErrorMessage>
                                {errors.message && errors.message.message}
                            </FormErrorMessage>
                        </FormControl>

                        {/* *PRIVACY AND POLICY* */}

                        <Flex justify="space-between" gap="8px" mt="24px">
                            <Checkbox size="lg" checked>
                                <Text align="justify" fontSize={["sm"]}>
                                    {" "}
                                    I have read the Privacy Policy and agree
                                    with the processing of my data provided
                                    above by the Afripro according to the
                                    policy.
                                </Text>
                            </Checkbox>
                        </Flex>

                        <ButtonFill
                            mt={8}
                            colorScheme="brand.blue"
                            isLoading={submitting}
                            type="submit"
                            blue={true}
                            text="SEND REQUEST"
                            style={{ width: "100%" }}
                        >
                            Submit
                        </ButtonFill>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};
export default ContactForm;
