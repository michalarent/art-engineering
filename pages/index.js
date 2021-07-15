import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/web";
import Overlay from "../components/Overlay";
import Scene from "../components/Scene";

export default function App() {
  // This spring controls the background and the svg fill (text color)
  const [{ background, fill }, set] = useSpring(
    { background: "#f0f0f0", fill: "#202020" },
    []
  );
  return (
    <a.main style={{ background }}>
      <Overlay fill={fill} />
      <Canvas
        className="canvas"
        dpr={[1, 5]}
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          overflow: "hidden",
          top: 0,
          left: 0,
        }}
      >
        <Scene setBg={set} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </a.main>
  );
}
