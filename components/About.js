import React, { Suspense, useEffect } from "react";
import {
	Container,
	Heading,
	HStack,
	Image,
	Stack,
	Text,
	Box,
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
import { PresentationControls, Loader } from "@react-three/drei";
import Link from "next/link";
import Mask from "../components/Mask";

const About = () => {
	const { ref, inView } = useInView({ threshold: 0.2 });
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
				x: 0,
				transition: {
					duration: 2,
					delay: 0.2,
					type: "spring",
				},
			});
		}
	}, [inView, colorMode, animationImg, animationInfo]);

	return (
		<Box w="100%" h="100vh">
			<Container maxW="container.xl" h="100%">
				<HStack
					flexDirection={{ base: "column", md: "row" }}
					spacing="8"
					w="100%"
					h="100%"
				>
					<Box ref={ref} position="relative" w="100%" flex="1">
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
								I&apos;m Jim, currently studying in feu roosevelt amet
								consectetur adipisicing elit. Veritatis vitae veniam asperiores,
								itaque enim beatae facilis est iste in ipsa quas qui ullam
								officia mollitia harum laboriosam deleniti perspiciatis debitis.
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
							<Link href="/work" passHref>
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
					</Box>
					<MotionImg
						pt="8"
						initial={{ opacity: 0, x: 100 }}
						animate={animationImg}
						h="100%"
						flex="1"
					>
						<Canvas shadows>
							<ambientLight intensity={5} />
							<directionalLight position={[-2, 5, 2]} intensity={5} />
							<Suspense fallback={null}>
								<PresentationControls
									global
									config={{ mass: 2, tension: 500 }}
									snap={{ mass: 4, tension: 1500 }}
									rotation={[0, 0.3, 0]}
									polar={[-Math.PI / 3, Math.PI / 3]}
									azimuth={[-Math.PI / 1.4, Math.PI / 2]}
								>
									<Mask position={[0, 0.25, 0]} scale={0.003} />
								</PresentationControls>
							</Suspense>
						</Canvas>
						<Loader />
					</MotionImg>
				</HStack>
			</Container>
		</Box>
	);
};

export default About;
