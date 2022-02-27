import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const TorusKnot = () => {
	const mesh = useRef();

	useFrame(() => {
		mesh.current.rotation.y += 0.01;
	});

	return (
		<mesh ref={mesh}>
			<torusKnotBufferGeometry attach="geometry" />
			<meshLambertMaterial attach="material" color="teal" wireframe />
		</mesh>
	);
};

export default TorusKnot;
