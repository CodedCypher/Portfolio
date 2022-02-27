import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
const Icosahedron = () => {
	const mesh = useRef();
	useFrame(() => {
		mesh.current.rotation.x -= 0.01;
		mesh.current.rotation.y -= 0.01;
	});
	return (
		<mesh scale={3} rotateOnAxis={[90, 0, 20]} ref={mesh}>
			<icosahedronBufferGeometry attach="geometry" />
			<meshLambertMaterial attach="material" wireframe color="teal" />
		</mesh>
	);
};

export default Icosahedron;
