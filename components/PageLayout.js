import { motion } from "framer-motion";
import Head from "next/head";
import Navbar from "./Navbar";
const variants = {
	hidden: { opacity: 0, x: 0, y: 20 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: -0, y: 20 },
};

const Layout = ({ children, title }) => (
	<>
		{title && (
			<Head>
				<title>{title} - Jim Encanacion</title>
				<meta name="twitter:title" content={title} />
				<meta property="og:title" content={title} />
			</Head>
		)}
		<Navbar />
		<motion.div
			initial="hidden"
			animate="enter"
			exit="exit"
			variants={variants}
			transition={{ duration: 0.4, type: "easeInOut" }}
			style={{ position: "relative" }}
		>
			{children}
		</motion.div>
	</>
);

export default Layout;
