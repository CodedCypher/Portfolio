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
import Link from "next/link";

const Project = () => {
	const MotionContainer = motion(Container);

	return (
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
						<BreadcrumbLink
							href="/work"
							color={useColorModeValue("teal.500", "teal.200")}
						>
							Work
						</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem>
						<HStack>
							<BreadcrumbLink href="/work/crm">CRM</BreadcrumbLink>
							<Badge>2022</Badge>
						</HStack>
					</BreadcrumbItem>
				</Breadcrumb>
				<Text>
					Gives businesses a central location to store customer and prospect
					data, track customer interactions and share information with
					colleagues
				</Text>
				<Stack>
					<HStack>
						<Badge colorScheme="teal">Website</Badge>
						<a href="https://crm-app-mern.netlify.app/" target="_blank">
							<Text>https://crm-app-mern.netlify.app/</Text>
						</a>
					</HStack>
					<HStack>
						<Badge colorScheme="teal">Stack</Badge>
						<Text>NodeJS, React, Express, MongoDB</Text>
					</HStack>
				</Stack>
				<Image src="/mangatracker.png" />
			</Stack>
		</MotionContainer>
	);
};

export default Project;
