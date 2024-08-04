import { geometry } from "maath";
import { extend } from "@react-three/fiber";
import Card from "./components/Card";
import { CameraControls, Float } from "@react-three/drei";

extend(geometry);

export default function App() {
  return (
    <>
      <Card />
      {/* <CameraControls
        makeDefault
        minAzimuthAngle={-Math.PI / 2.5}
        maxAzimuthAngle={Math.PI / 2.5}
        minPolarAngle={0.5}
        maxPolarAngle={Math.PI / 2}
      /> */}
    </>
  );
}
