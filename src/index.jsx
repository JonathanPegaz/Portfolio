import { Canvas } from "@react-three/fiber";
import "./style.css";
import { createRoot } from "react-dom/client";
import { Perf } from "r3f-perf";
import App from "./App";

const root = createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    gl={{ localClippingEnabled: true }}
    eventSource={document.getElementById("root")}
    eventPrefix="client"
  >
    <Perf position="bottom-left" />
    <App />
  </Canvas>
);
