import React from "react";
import {
	SimpleGrid,
	Heading,
	Text,
	Container,
	Image,
	Stack,
	Box,
	useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "../../components/PageLayout";

const Work = () => {
	const MotionStack = motion(Stack);
	return (
		<PageLayout title="work">
			<Container maxW="container.md">
				<MotionStack
					pt="32"
					spacing="16"
					justifyContent="center"
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
					<Stack>
						<Heading>Works</Heading>
						<Box w="16" bg={useColorModeValue("teal.500", "teal.200")} h="1" />
					</Stack>
					<SimpleGrid columns={{ base: 1, md: 2 }} spacing="12">
						<Link href={`/work/crm`} passHref>
							<Stack
								spacing="4"
								justifyContent="center"
								alignItems="center"
								_hover={{
									cursor: "pointer",
								}}
							>
								<Image src="/crm.png" h="200px" w="xs" alt="crm" />
								<Heading textAlign="center" size="md">
									CRM
								</Heading>
								<Text textAlign="center" fontSize="sm" p>
									Gives businesses a central location to store customer and
									prospect data, track customer interactions and share
									information with colleagues
								</Text>
							</Stack>
						</Link>
						<Link href="/work/mangatracker" passHref>
							<Stack
								spacing="4"
								justifyContent="center"
								alignItems="center"
								_hover={{
									cursor: "pointer",
								}}
							>
								<Image
									src="/mangatracker.png"
									h="200px"
									w="xs"
									alt="mangatracker"
								/>
								<Heading textAlign="center" size="md">
									Manga Tracker
								</Heading>
								<Text textAlign="center" fontSize="sm">
									Forget about manually checking for new chapters and
									bookmarking mangas. keep track of mangas across manganelo
								</Text>
							</Stack>
						</Link>
						<Link href="/work/map" passHref>
							<Stack
								spacing="4"
								justifyContent="center"
								alignItems="center"
								_hover={{
									cursor: "pointer",
								}}
							>
								<Image src="/map.png" h="200px" w="xs" alt="map" />
								<Heading textAlign="center" size="md">
									MAPlatecto Model
								</Heading>
								<Text textAlign="center" fontSize="sm">
									Representing the 7 different plate which are the North
									American Plate, Pacific Plate, South American Plate, African
									Plate, Antarctic Plate, Indo-Australian Plate, Eurasian Plate.
								</Text>
							</Stack>
						</Link>
						<Link href="/work/mangafinder" passHref>
							<Stack
								spacing="4"
								justifyContent="center"
								alignItems="center"
								_hover={{
									cursor: "pointer",
								}}
							>
								<Image
									src="/mangafinder.png"
									h="200px"
									w="xs"
									alt="mangafinder"
								/>
								<Heading textAlign="center" size="md">
									Manga Finder
								</Heading>
								<Text textAlign="center" fontSize="sm">
									Built using Jikan API, allows you to search through tens of
									thousands of mangas. Find the manga that you&apos;re looking
									for. Mangas
								</Text>
							</Stack>
						</Link>
						<Link href="/work/aloblog" passHref>
							<Stack
								spacing="4"
								justifyContent="center"
								alignItems="center"
								_hover={{
									cursor: "pointer",
								}}
							>
								<Image src="/blog.png" h="200px" w="xs" alt="blog" />
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
		</PageLayout>
	);
};

export default Work;
