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
		<PageLayout>
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
								<Link href="/work/map" passHref>
									<BreadcrumbLink>MAPlatecto Model</BreadcrumbLink>
								</Link>
								<Badge>2022</Badge>
							</HStack>
						</BreadcrumbItem>
					</Breadcrumb>
					<Text>
						Representing the 7 different plate which are the North American
						Plate, Pacific Plate, South American Plate, African Plate, Antarctic
						Plate, Indo-Australian Plate, Eurasian Plate.
					</Text>
					<Stack>
						<HStack>
							<Badge colorScheme="teal">Website</Badge>
							<a
								href="https://earthscipeta.netlify.app/"
								target="_blank"
								rel="noreferrer"
							>
								<Text>https://earthscipeta.netlify.app/</Text>
							</a>
						</HStack>
						<HStack>
							<Badge colorScheme="teal">Stack</Badge>
							<Text>NodeJS, React, Express, MongoDB</Text>
						</HStack>
					</Stack>
					<Image src="/map.png" alt="map" />
				</Stack>
			</MotionContainer>
		</PageLayout>
	);
};

export default Project;
