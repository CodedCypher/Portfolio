import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import theme from "../lib/theme";
import "../styles/global.css";

function MyApp({ Component, pageProps, router }) {
	return (
		<ChakraProvider theme={theme}>
			<AnimatePresence
				exitBeforeEnter
				initial={true}
				onExitComplete={() => {
					if (typeof window !== "undefined") {
						window.scrollTo({ top: 0 });
					}
				}}
			>
				<Component {...pageProps} key={router.route} />
			</AnimatePresence>
		</ChakraProvider>
	);
}

export default MyApp;
