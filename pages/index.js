import React, { Suspense } from "react";
import {
	Heading,
	Box,
	Text,
	Stack,
	Button,
	Container,
	useColorModeValue,
	useColorMode,
	HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsPersonLinesFill } from "react-icons/bs";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import dynamic from "next/dynamic";
const TorusKnot = dynamic(() => import("../components/TorusKnot"));
import About from "../components/About";

const Home = () => {
	const { colorMode } = useColorMode();
	const MotionButton = motion(Button);
	const MotionText = motion(Text);
	const MotionHeading = motion(Heading);
	const MotionBox = motion(Box);

	return (
		<>
			<Box w="100%" h="100vh">
				<Container maxW="container.xl" w="100%" h="100%">
					<HStack
						h="100%"
						w="100%"
						alignItems="center"
						justifyContent="center"
						position="initial"
						flexDirection={{ base: "column", md: "row" }}
					>
						<Stack
							flex="1"
							w="100%"
							spacing="8"
							h="100%"
							justifyContent="center"
							position="relative"
						>
							<Stack spacing="6">
								<Box>
									<MotionText
										color={useColorModeValue("teal.500", "teal.200")}
										initial={{ opacity: 0, y: -4 }}
										animate={{
											opacity: 1,
											y: 0,
										}}
										fontSize={{ base: "sm", md: "md" }}
									>
										Hello, my name is{" "}
									</MotionText>
									<MotionText
										fontSize={{ base: "xl", md: "3xl", lg: "4xl", xl: "5xl" }}
										initial={{ opacity: 0, y: -4 }}
										animate={{
											opacity: 1,
											y: 0,
											transition: {
												delay: 0.4,
											},
										}}
									>
										Jim Encarnacion
									</MotionText>
									<MotionHeading
										fontSize={{ base: "3xl", lg: "4xl", xl: "5xl" }}
										initial={{ opacity: 0, y: -4 }}
										animate={{
											opacity: 1,
											y: 0,
											transition: {
												delay: 0.6,
											},
										}}
									>
										Full Stack Developer
									</MotionHeading>
								</Box>
								<MotionText
									initial={{ opacity: 0, y: -4 }}
									animate={{
										opacity: 1,
										y: 0,
										transition: {
											delay: 0.8,
										},
									}}
									fontSize={{ lg: "lg" }}
								>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Obcaecati fugit cumque, mollitia, dolor necessitatibus
									corporis incidunt et sunt autem perspiciatis dignissimos quae
									similique totam ipsam rem reprehenderit ratione quaerat qui.
								</MotionText>
							</Stack>
							<MotionButton
								variant={colorMode === "light" ? "solid" : "outline"}
								colorScheme="teal"
								w="fit-content"
								initial={{ opacity: 0, y: -4 }}
								animate={{
									opacity: 1,
									y: 0,
									transition: {
										delay: 1,
									},
								}}
								rightIcon={<BsPersonLinesFill />}
							>
								Resume
							</MotionButton>
						</Stack>
						<MotionBox
							w={{ base: "100%", md: "50%" }}
							h={{ base: "25%", md: "100%" }}
							position={{ base: "absolute", md: "initial" }}
							zIndex="-1"
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								transition: {
									delay: 1,
								},
							}}
						>
							<Box as={Canvas} opacity={{ base: "0.2", md: "1" }} w="100%">
								<OrbitControls />
								<ambientLight intensity={0.5} />
								<directionalLight position={[-2, 5, 2]} intensity={1} />
								<Suspense fallback={null}>
									<TorusKnot />
								</Suspense>
							</Box>
						</MotionBox>
					</HStack>
				</Container>
			</Box>
			<About />
		</>
	);
};

export default Home;
