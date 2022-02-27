import React, { Suspense, useEffect } from "react";
import {
	Container,
	Heading,
	HStack,
	Image,
	Stack,
	Text,
	Box,
	useColorModeValue,
	useColorMode,
	List,
	ListItem,
	ListIcon,
	SimpleGrid,
	Button,
} from "@chakra-ui/react";
import { AiOutlineCheckCircle, AiOutlineRight } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import dynamic from "next/dynamic";
const Sphere = dynamic(() => import("./Sphere"));
import Link from "next/link";

const About = () => {
	const { ref, inView } = useInView();
	const { colorMode } = useColorMode();
	const animationInfo = useAnimation();
	const animationImg = useAnimation();
	const MotionInfo = motion(Stack);
	const MotionImg = motion(Box);

	useEffect(() => {
		if (inView) {
			animationInfo.start({
				opacity: 1,
				x: 0,
				transition: {
					duration: 2,
					delay: 0.2,
					type: "spring",
				},
			});

			animationImg.start({
				opacity: 1,
				y: 0,
				transition: {
					duration: 2,
					delay: 0.2,
					type: "spring",
				},
			});
		}
	}, [inView, colorMode]);

	return (
		<Box w="100%">
			<Container maxW="container.xl" h="100%">
				<HStack
					flexDirection={{ base: "column", md: "row" }}
					spacing="8"
					w="100%"
					h="100%"
				>
					<Box flex="1" ref={ref} position="relative">
						<MotionInfo
							h="100%"
							spacing="6"
							justifyContent="center"
							initial={{
								opacity: 0,
								x: -100,
							}}
							animate={animationInfo}
							zIndex="4"
						>
							<Heading size="2xl">Hi there</Heading>
							<Text fontSize="md">
								I'm Jim, currently studying in feu roosevelt amet consectetur
								adipisicing elit. Veritatis vitae veniam asperiores, itaque enim
								beatae facilis est iste in ipsa quas qui ullam officia mollitia
								harum laboriosam deleniti perspiciatis debitis.
							</Text>
							<Text fontSize="md">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Asperiores eius, animi doloribus magni quia ullam ea aliquam
								suscipit debitis eligendi voluptates excepturi accusantium
								consequatur natus tempore quas aspernatur blanditiis. Explicabo?
							</Text>
							<SimpleGrid columns={2}>
								<List spacing={3}>
									{["MongoDB", "Express js", "React js", "Node js"].map(
										(t, i) => {
											return (
												<ListItem key={i}>
													<ListIcon
														as={AiOutlineCheckCircle}
														color="teal.500"
													/>
													{t}
												</ListItem>
											);
										}
									)}
								</List>
								<List spacing={3}>
									{["HTML", "CSS", "ES6"].map((t, i) => {
										return (
											<ListItem key={i}>
												<ListIcon as={AiOutlineCheckCircle} color="teal.500" />
												{t}
											</ListItem>
										);
									})}
								</List>
							</SimpleGrid>
							<Link href="/work">
								<Button
									colorScheme="teal"
									w="fit-content"
									variant={colorMode === "light" ? "solid" : "outline"}
									rightIcon={<AiOutlineRight />}
								>
									View Portfolio
								</Button>
							</Link>
						</MotionInfo>
						<Box
							position="absolute"
							top="0"
							w="100%"
							h="100%"
							opacity="0.1"
							zIndex="-1"
						>
							<Canvas>
								<OrbitControls />
								<ambientLight intensity={0.5} />
								<directionalLight position={[-2, 5, 2]} intensity={1} />
								<Suspense fallback={null}>
									<Sphere />
								</Suspense>
							</Canvas>
						</Box>
					</Box>
					<MotionImg
						pt="8"
						position="relative"
						initial={{ opacity: 0, y: 100 }}
						animate={animationImg}
					>
						<Image
							alt="about-picture"
							h={{ base: "sm", md: "lg", lg: "xl" }}
							w={{ base: "xs", md: "sm", lg: "md" }}
							objectFit="cover"
							src="https://images.pexels.com/photos/1852482/pexels-photo-1852482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							borderRadius="md"
						/>
						<Box
							border="2px solid "
							borderColor={useColorModeValue("teal.500", "teal.300")}
							borderRadius="md"
							h={{ base: "md", md: "md", lg: "xl" }}
							w={{ base: "sm", md: "sm", lg: "md" }}
							display={{ base: "none", md: "inherit" }}
							right="-5"
							bottom="-5"
							position="absolute"
							zIndex="-1"
						/>
					</MotionImg>
				</HStack>
			</Container>
		</Box>
	);
};

export default About;
