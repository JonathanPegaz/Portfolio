import { suspend } from "suspend-react";
import { Text, Sky, MeshPortalMaterial, Html } from "@react-three/drei";
import JonathanModel from "../models/jonathan";

const regular = import("@pmndrs/assets/fonts/inter_regular.woff");
const medium = import("@pmndrs/assets/fonts/inter_medium.woff");

export default function Frame({
  name = "Jonathan Pegaz",
  bg,
  width = 1,
  height = 1.61803398875,
  children,
  ...props
}) {
  return (
    <>
      <group {...props}>
        <Text
          font={suspend(medium).default}
          color="black"
          fontSize={0.15}
          letterSpacing={-0.025}
          anchorY="top"
          anchorX="center"
          lineHeight={0.8}
          position={[0, 0.715, 0.01]}
          textAlign="center"
          maxWidth={1}
        >
          {name}
        </Text>
        <mesh>
          <roundedPlaneGeometry args={[width, height, 0.1]} />
          <MeshPortalMaterial>{children}</MeshPortalMaterial>
        </mesh>
        <mesh position={[0, 0, -0.001]}>
          <roundedPlaneGeometry args={[width + 0.05, height + 0.05, 0.12]} />
          <meshBasicMaterial color="black" />
        </mesh>
      </group>
    </>
  );
}
