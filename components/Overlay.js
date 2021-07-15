import React from "react";
import { a } from "@react-spring/web";
import useWindowSize from "./useWindowSize.js";

export default function Overlay({ fill }) {
  // Just a Figma export, the fill is animated
  const size = useWindowSize();
  return (
    <div className="overlay">
      <a.svg
        style={{ width: "100vw", height: "100vh" }}
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          style={{ whiteSpace: "pre" }}
          fontFamily="Inter"
          fontSize={size.width * 0.03}
          fontWeight="normal"
          letterSpacing="-.02em"
        >
          <tspan
            x={size.width / 3 + size.width / 4}
            y={size.height / 4 - size.height / 24}
        
          >ART ENGINEERING</tspan>
        </text>
        <text
          style={{ whiteSpace: "pre" }}
          fontFamily="Inter"
          fontSize={size.width * 0.02}
          fontWeight="bold"
          letterSpacing="-.02em"
        >
          <tspan
            x={size.width / 3 + size.width / 4}
            y={size.height / 4}
          >ARENT.MICHAL - at - GMAIL.COM</tspan>
        </text>
      </a.svg>
    </div>
  );
}
