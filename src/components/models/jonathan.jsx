import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
const zPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
const yPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 1);
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 mccree.glb
Author: Seafoam (https://sketchfab.com/seafoam)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-mccree-38aedc02c0b2412babdc4d0eac7c6803
Title: Low poly McCree
*/
export default function JonathanModel({ clip, ...props }) {
  const { nodes, materials } = useGLTF("./low_poly_mccree-transformed.glb");
  return (
    <mesh geometry={nodes.base.geometry} {...props} dispose={null}>
      <meshBasicMaterial
        map={materials.PaletteMaterial001.map}
        side={THREE.DoubleSide}
        clippingPlanes={clip ? [zPlane, yPlane] : null}
      />
    </mesh>
  );
}