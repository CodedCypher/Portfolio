import Layout from "../components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import "../styles/global.css";

function MyApp({ Component, pageProps, router }) {
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<Component {...pageProps} key={router.route} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
