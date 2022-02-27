import { MeshDistortMaterial } from "@react-three/drei";
import React from "react";

const Box = () => {
	return (
		<mesh scale={1}>
			{/* <boxBufferGeometry attach="geometry" args={[3, 3, 3]} /> */}
			<torusKnotBufferGeometry attach="geometry" args={[8, 2, 100, 16]}>
				<MeshDistortMaterial
					color="#8352FD"
					attach="material"
					distort={0.3}
					speed={1.5}
					roughness={0}
				/>
			</torusKnotBufferGeometry>
			<meshBasicMaterial color="teal" wireframe={true} />
			{/* <meshLambertMaterial attach="material" color="blue" /> */}
		</mesh>
	);
};

export default Box;
