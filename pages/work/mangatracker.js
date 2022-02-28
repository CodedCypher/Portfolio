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
		<PageLayout title="mangatracker">
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
								<Link href="/work/mangatracker">
									<BreadcrumbLink>Manga Tracker</BreadcrumbLink>
								</Link>
								<Badge>2021</Badge>
							</HStack>
						</BreadcrumbItem>
					</Breadcrumb>
					<Text>
						Forget about manually checking for new chapters and bookmarking
						mangas. keep track of mangas across manganelo
					</Text>
					<Stack>
						<HStack>
							<Badge colorScheme="teal">Website</Badge>
							<a
								href="https://mangatracker.vercel.app/"
								target="_blank"
								rel="noreferrer"
							>
								<Text>https://mangatracker.vercel.app/</Text>
							</a>
						</HStack>
						<HStack>
							<Badge colorScheme="teal">Stack</Badge>
							<Text>NodeJS, React, Express, MongoDB</Text>
						</HStack>
					</Stack>
					<Image src="/mangatracker.png" alt="mangatracker" />
				</Stack>
			</MotionContainer>
		</PageLayout>
	);
};

export default Project;
