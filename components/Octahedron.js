import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Octahedront = () => {
	const mesh = useRef();

	useFrame(() => {
		mesh.current.rotation.y += 0.01;
		mesh.current.rotation.x += 0.01;
	});

	return (
		<mesh ref={mesh} scale={3}>
			<octahedronBufferGeometry attach="geometry" />
			<meshLambertMaterial attach="material" color="teal" wireframe />
		</mesh>
	);
};

export default Octahedront;
