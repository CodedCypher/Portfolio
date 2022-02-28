import React from "react";
import {
	Container,
	Text,
	Image,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	useColorModeValue,
	Stack,
	HStack,
	Badge,
} from "@chakra-ui/react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import PageLayout from "../../components/PageLayout";
import Link from "next/link";

const Project = () => {
	const MotionContainer = motion(Container);

	return (
		<PageLayout title="mangafinder">
			<MotionContainer
				initial={{ opacity: 0, y: 100 }}
				animate={{
					opacity: 1,
					y: 0,
					transition: {
						duration: 1,
					},
				}}
				h="100vh"
			>
				<Stack h="100%" justifyContent="center" spacing="6">
					<Breadcrumb
						spacing="8px"
						separator={<HiOutlineChevronRight color="gray.500" />}
					>
						<BreadcrumbItem>
							<Link href="/work" passHref>
								<BreadcrumbLink
									color={useColorModeValue("teal.500", "teal.200")}
								>
									Work
								</BreadcrumbLink>
							</Link>
						</BreadcrumbItem>

						<BreadcrumbItem>
							<HStack>
								<Link href="/work/mangafinder" passHref>
									<BreadcrumbLink>Manga Finder</BreadcrumbLink>
								</Link>
								<Badge>2020</Badge>
							</HStack>
						</BreadcrumbItem>
					</Breadcrumb>
					<Text>
						Built using Jikan API, allows you to search through tens of
						thousands of mangas. Find the manga that you&apos;re looking for.
						Mangas
					</Text>
					<Stack>
						<HStack>
							<Badge colorScheme="teal">Website</Badge>
							<a
								href="https://manga-finder.netlify.app/manga"
								target="_blank"
								rel="noreferrer"
							>
								<Text>https://manga-finder.netlify.app/manga</Text>
							</a>
						</HStack>
						<HStack>
							<Badge colorScheme="teal">Stack</Badge>
							<Text>React, JikanAPI, Tailwind</Text>
						</HStack>
					</Stack>
					<Image src="/mangafinder.png" alt="mangafinder" />
				</Stack>
			</MotionContainer>
		</PageLayout>
	);
};

export default Project;
