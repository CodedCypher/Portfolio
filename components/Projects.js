import React, { useEffect, useState } from "react";
import {
	Button,
	Container,
	Heading,
	Stack,
	Text,
	HStack,
	Image,
	Tag,
	useColorMode,
	Box,
} from "@chakra-ui/react";
import { AiOutlineArrowRight, AiOutlineCaretDown } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
	const { colorMode } = useColorMode();
	const MotionHStack = motion(HStack);
	const animationPr1 = useAnimation();
	const animationPr2 = useAnimation();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			animationPr1.start({
				display: "inherit",
				opacity: 1,
				y: 0,
				transition: {
					duration: 2,
					type: "spring",
				},
			});
			animationPr2.start({
				display: "inherit",
				y: 0,
				opacity: 1,
				transition: {
					duration: 2,
					type: "spring",
				},
			});
		}
	}, [colorMode, inView]);

	return (
		<Box w="100%" ref={ref}>
			<Container maxW="container.lg" w="100%" h="100%" pb="10">
				<Stack spacing="24" alignItems="center" w="100%">
					<MotionHStack
						w="100%"
						spacing="6"
						initial={{
							display: "none",
							opacity: 0,
							y: 100,
						}}
						animate={animationPr1}
						flexDir={{ base: "column-reverse", md: "row" }}
					>
						<Image src="./mangatracker.png" h="xs" w="100%" mt="8" />
						<Stack spacing="6">
							<Heading size="lg">Manga Tracker</Heading>
							<Text>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
								laborum vitae, ipsa dignissimos tempore reprehenderit!
							</Text>
							<HStack flexWrap="wrap">
								<Tag colorScheme="blue">Next.js</Tag>
								<Tag colorScheme="blue">Chakra UI</Tag>
								<Tag colorScheme="orange">Cheerio</Tag>
								<Tag colorScheme="green">MongoDB</Tag>
								<Tag colorScheme="purple">Heroku</Tag>
							</HStack>
							<Button w="fit-content" rightIcon={<AiOutlineArrowRight />}>
								View Manga Tracker
							</Button>
						</Stack>
					</MotionHStack>
					<MotionHStack
						spacing="6"
						initial={{
							display: "none",
							opacity: 0,
							y: 100,
						}}
						animate={animationPr2}
						flexDir={{ base: "column-reverse", md: "row-reverse" }}
					>
						<Image src="./crm.png" mt="8" h="xs" w="100%" />
						<Stack spacing="6">
							<Heading size="lg">CRM</Heading>
							<Text>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
								laborum vitae, ipsa dignissimos tempore reprehenderit!
							</Text>
							<HStack flexWrap="wrap">
								<Tag colorScheme="blue">Next.js</Tag>
								<Tag colorScheme="blue">Chakra UI</Tag>
								<Tag colorScheme="green">MongoDB</Tag>
								<Tag colorScheme="green">Express</Tag>
								<Tag colorScheme="purple">Heroku</Tag>
							</HStack>
							<Button w="fit-content" rightIcon={<AiOutlineArrowRight />}>
								View CRM
							</Button>
						</Stack>
					</MotionHStack>
					<Button
						variant={colorMode === "light" ? "solid" : "outline"}
						colorScheme="teal"
						w="fit-content"
						size="lg"
						rightIcon={<AiOutlineCaretDown />}
					>
						View Projects
					</Button>
				</Stack>
			</Container>
		</Box>
	);
};

export default Projects;
