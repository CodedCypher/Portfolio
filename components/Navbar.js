import React from "react";
import {
	Heading,
	HStack,
	Container,
	useColorMode,
	IconButton,
	Button,
	Box,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";
import ThemeToggleButton from "./themeToggleButton";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const MotionButton = motion(Button);
	return (
		<Box
			w="100%"
			position="fixed"
			css={{ backdropFilter: "blur(10px)" }}
			zIndex="9999"
		>
			<Container maxW="container.xl">
				<HStack w="100%" justifyContent="space-between" py="4">
					<HStack spacing="24">
						<Link href="/" passHref>
							<Heading
								size="lg"
								color={useColorModeValue("teal.500", "teal.200")}
								_hover={{
									cursor: "pointer",
								}}
							>
								E
							</Heading>
						</Link>
						<HStack spacing="16" display={{ base: "none", md: "inherit" }}>
							<Link href="/work" passHref>
								<MotionButton variant="link">Projects</MotionButton>
							</Link>
							<Link href="/contact" passHref>
								<MotionButton variant="link">Contact</MotionButton>
							</Link>
						</HStack>
					</HStack>
					<HStack spacing="4">
						<ThemeToggleButton
							_hover={{
								cursor: "pointer",
							}}
						/>
						<Menu isLazy>
							<MenuButton
								display={{ base: "inherit", md: "none" }}
								as={IconButton}
								icon={<AiOutlineMenu />}
							/>
							<MenuList>
								<Link href="/" passHref>
									<MenuItem>Home</MenuItem>
								</Link>
								<Link href="/work" passHref>
									<MenuItem>Projects</MenuItem>
								</Link>
								<Link href="/contact" passHref>
									<MenuItem>Contact</MenuItem>
								</Link>
							</MenuList>
						</Menu>
					</HStack>
				</HStack>
			</Container>
		</Box>
	);
};

export default Navbar;
