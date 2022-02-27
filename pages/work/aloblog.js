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
							<BreadcrumbLink href="/work/map">Alo Blog</BreadcrumbLink>
							<Badge>2020</Badge>
						</HStack>
					</BreadcrumbItem>
				</Breadcrumb>
				<Text>
					Very first website created using React, MongoDb, Express and Node. I
					Created this website so I people can post about their day or anything
					they want.
				</Text>
				<Stack>
					<HStack>
						<Badge colorScheme="teal">Website</Badge>
						<a href="https://aloblog.herokuapp.com/" target="_blank">
							<Text>https://aloblog.herokuapp.com/</Text>
						</a>
					</HStack>
					<HStack>
						<Badge colorScheme="teal">Stack</Badge>
						<Text>React, NodeJS, Express, MongoDB</Text>
					</HStack>
				</Stack>
				<Image src="/blog.png" />
			</Stack>
		</MotionContainer>
	);
};

export default Project;
