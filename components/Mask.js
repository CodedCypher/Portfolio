/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: PedroEdits (https://sketchfab.com/PedroEdits)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/leader-mask-from-squid-game-tag-me-when-use-it-0e4993d9a0684d03b76644a5253c28a3
title: Leader mask from Squid Game (tag me when use it)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function Model({ ...props }) {
	const group = useRef();
	const { nodes, materials } = useGLTF("/mask.gltf");

	useFrame((state) => {
		const t = state.clock.getElapsedTime();
		group.current.rotation.y = Math.sin(t / 4) / 8;
		group.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
		group.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
	});

	return (
		<group ref={group} {...props} dispose={null} scale="0.7">
			<group position={[0, 0, 0.04]} rotation={[-Math.PI / 2, 0, 0.07]}>
				<group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
					<group position={[35.05, 120.79, 6.72]} scale={[476.4, 476.4, 476.4]}>
						<mesh
							geometry={nodes.FrontMan_mask_Workspace1Mtl_0.geometry}
							material={materials.Workspace1Mtl}
						/>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/mask.gltf");