import React from "react";
import {
	SimpleGrid,
	Heading,
	Text,
	Container,
	Image,
	Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";

const Work = () => {
	const MotionStack = motion(Stack);
	return (
		<Container maxW="container.md">
			<MotionStack
				pt="20"
				spacing="16"
				justifyContent="center"
				alignItems="center"
				h="100%"
				initial={{
					opacity: 0,
					y: 100,
				}}
				animate={{
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.7,
					},
				}}
			>
				<Heading>Works</Heading>
				<SimpleGrid columns={{ base: 1, md: 2 }} spacing="12">
					<Link href={`/work/crm`}>
						<Stack
							spacing="4"
							justifyContent="center"
							alignItems="center"
							_hover={{
								cursor: "pointer",
							}}
						>
							<Image src="/crm.png" h="200px" w="xs" />
							<Heading textAlign="center" size="md">
								CRM
							</Heading>
							<Text textAlign="center" fontSize="sm" p>
								Gives businesses a central location to store customer and
								prospect data, track customer interactions and share information
								with colleagues
							</Text>
						</Stack>
					</Link>
					<Link href="/work/mangatracker">
						<Stack
							spacing="4"
							justifyContent="center"
							alignItems="center"
							_hover={{
								cursor: "pointer",
							}}
						>
							<Image src="/mangatracker.png" h="200px" w="xs" />
							<Heading textAlign="center" size="md">
								Manga Tracker
							</Heading>
							<Text textAlign="center" fontSize="sm">
								Forget about manually checking for new chapters and bookmarking
								mangas. keep track of mangas across manganelo
							</Text>
						</Stack>
					</Link>
					<Link href="/work/map">
						<Stack
							spacing="4"
							justifyContent="center"
							alignItems="center"
							_hover={{
								cursor: "pointer",
							}}
						>
							<Image src="/map.png" h="200px" w="xs" />
							<Heading textAlign="center" size="md">
								MAPlatecto Model
							</Heading>
							<Text textAlign="center" fontSize="sm">
								Representing the 7 different plate which are the North American
								Plate, Pacific Plate, South American Plate, African Plate,
								Antarctic Plate, Indo-Australian Plate, Eurasian Plate.
							</Text>
						</Stack>
					</Link>
					<Link href="/work/mangafinder">
						<Stack
							spacing="4"
							justifyContent="center"
							alignItems="center"
							_hover={{
								cursor: "pointer",
							}}
						>
							<Image src="/mangafinder.png" h="200px" w="xs" />
							<Heading textAlign="center" size="md">
								Manga Finder
							</Heading>
							<Text textAlign="center" fontSize="sm">
								Built using Jikan API, allows you to search through tens of
								thousands of mangas. Find the manga that you're looking for.
								Mangas
							</Text>
						</Stack>
					</Link>
					<Link href="/work/aloblog">
						<Stack
							spacing="4"
							justifyContent="center"
							alignItems="center"
							_hover={{
								cursor: "pointer",
							}}
						>
							<Image src="/blog.png" h="200px" w="xs" />
							<Heading textAlign="center" size="md">
								Alo Blog
							</Heading>
							<Text textAlign="center" fontSize="sm">
								Very first website created using React, MongoDb, Express and
								Node. I Created this website so I people can post about their
								day or anything they want.
							</Text>
						</Stack>
					</Link>
				</SimpleGrid>
			</MotionStack>
		</Container>
	);
};

export default Work;
