import { Sky } from "@react-three/drei";
import JonathanModel from "./models/jonathan";
import Frame from "./subcomponents/Frame";

export default function Card() {
  return (
    <>
      <Frame onClick={(e) => console.log("click")}>
        <Sky />
        <JonathanModel position={[0, -2, 0]} />
      </Frame>
      <JonathanModel clip position={[0, -2, 0]} />
    </>
  );
}
