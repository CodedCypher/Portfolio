import React, { Suspense, useEffect } from "react";
import {
	Input,
	Container,
	Stack,
	Button,
	FormControl,
	useColorModeValue,
	Heading,
	useColorMode,
	Textarea,
	Box,
	FormErrorMessage,
	useToast,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
import TextareaAutosize from "react-textarea-autosize";
import { motion } from "framer-motion";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
const Icosahedron = dynamic(() => import("../components/Icosahedron"));
const Octahedront = dynamic(() => import("../components/Octahedron"));
import { Formik } from "formik";
import * as Yup from "yup";

const Contact = () => {
	const { colorMode } = useColorMode();
	const MotionHeading = motion(Heading);
	const MotionInput = motion(Input);
	const MotionTextarea = motion(Textarea);
	const MotionButton = motion(Button);
	const MotionBox = motion(Box);
	const toast = useToast();
	return (
		<Box w="100%" position="relative">
			<MotionBox
				position="absolute"
				top="30%"
				left="0%"
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 1.5 },
				}}
				display={{ base: "none", lg: "inherit" }}
				zIndex={-1}
			>
				<Canvas>
					<OrbitControls />
					<ambientLight intensity={0.5} />
					<directionalLight position={[-2, 5, 2]} intensity={1} />
					<Suspense fallback={null}>
						<Icosahedron />
					</Suspense>
				</Canvas>
			</MotionBox>
			<MotionBox
				zIndex={-1}
				position="absolute"
				bottom="30%"
				right="0%"
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 1.7 },
				}}
				display={{ base: "none", lg: "inherit" }}
			>
				<Canvas>
					<OrbitControls />
					<ambientLight intensity={0.5} />
					<directionalLight position={[-2, 5, 2]} intensity={1} />
					<Suspense fallback={null}>
						<Octahedront />
					</Suspense>
				</Canvas>
			</MotionBox>
			<Container maxW="container.sm" w="100vw" h="100vh" position="relative">
				<Formik
					initialValues={{
						email: "",
						message: "",
					}}
					validationSchema={Yup.object().shape({
						email: Yup.string()
							.email("Email must be valid")
							.required("Email is required"),
						message: Yup.string().required("Message is required"),
					})}
					onSubmit={async (values, actions) => {
						try {
							await fetch("http://localhost:3000/api", {
								method: "POST",
								body: JSON.stringify({ ...values }),
							});
							toast({
								title: "Message sent",
								status: "success",
								duration: 9000,
								isClosable: true,
							});
							actions.resetForm();
						} catch (error) {
							console.log(error);
							toast({
								title: "Error sending message",
								status: "error",
								duration: 9000,
								isClosable: true,
							});
						}
					}}
				>
					{(formik) => {
						return (
							<Stack h="100%" justifyContent="center" a spacing="10">
								<MotionHeading
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
								>
									Say hello
								</MotionHeading>
								<FormControl
									isInvalid={formik.errors.email && formik.touched.email}
								>
									<MotionInput
										type="email"
										variant="filled"
										placeholder="Your Email"
										_focus={{
											borderColor: useColorModeValue("teal.500", "teal.300"),
										}}
										size="lg"
										initial={{ opacity: 0, y: 50 }}
										animate={{
											opacity: 1,
											y: 0,
											transition: { delay: 0.4 },
										}}
										{...formik.getFieldProps("email")}
									/>
									<FormErrorMessage>{formik.errors.email}</FormErrorMessage>
								</FormControl>
								<FormControl
									isInvalid={formik.errors.message && formik.touched.message}
								>
									<MotionTextarea
										as={TextareaAutosize}
										placeholder="Message"
										_focus={{
											borderColor: useColorModeValue("teal.500", "teal.300"),
										}}
										variant="filled"
										minRows={3}
										maxRows={10}
										size="lg"
										initial={{ opacity: 0, y: 50 }}
										animate={{ opacity: 1, y: 0, transition: { delay: 0.8 } }}
										{...formik.getFieldProps("message")}
									/>
									<FormErrorMessage>{formik.errors.message}</FormErrorMessage>
								</FormControl>
								<MotionButton
									colorScheme="teal"
									w="fit-content"
									variant="outline"
									leftIcon={<AiOutlineSend />}
									variant={colorMode === "light" ? "solid" : "outline"}
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0, transition: { delay: 1 } }}
									isLoading={formik.isSubmitting}
									onClick={formik.handleSubmit}
								>
									Send Message
								</MotionButton>
							</Stack>
						);
					}}
				</Formik>
			</Container>
		</Box>
	);
};

export default Contact;
