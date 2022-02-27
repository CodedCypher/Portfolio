import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Sphere = () => {
	const mesh = useRef();

	useFrame(() => {
		mesh.current.rotation.x += 0.01;
		mesh.current.rotation.y -= 0.01;
	});
	return (
		<mesh ref={mesh} scale={3}>
			<sphereBufferGeometry attach="geometry" />
			<meshLambertMaterial attach="material" color="teal" wireframe />
		</mesh>
	);
};

export default Sphere;
