import React from "react";
import { Text, Container } from "@chakra-ui/react";

const Footer = () => {
	return (
		<Container maxW="container.lg" mt="8">
			<Text textAlign="center" color="gray.500">
				© {new Date().getFullYear} Jim Encarnacion. All Rights Reserved.
			</Text>
		</Container>
	);
};

export default Footer;
