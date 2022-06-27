// eslint-disable-next-line
import React, { useState, useRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Vector3,
  Spherical,
  Color,
  AdditiveBlending,
  ShaderMaterial
} from "three";

class StarfieldMaterial extends ShaderMaterial {
  constructor() {
    super({
      uniforms: { time: { value: 0.0 }, fade: { value: 1.0 } },
      vertexShader: /* glsl */ `
      uniform float time;
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(mvPosition.x + 2.0 * time + 100.0));
        gl_Position = projectionMatrix * mvPosition;
      }`,
      fragmentShader: /* glsl */ `
      uniform sampler2D pointTexture;
      uniform float fade;
      varying vec3 vColor;
      void main() {
        float opacity = 1.0;
        if (fade == 1.0) {
          float d = distance(gl_PointCoord, vec2(0.5, 0.5));
          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
        }
        gl_FragColor = vec4(vColor, opacity);

        #include <tonemapping_fragment>
          #include <encodings_fragment>
      }`
    });
  }
}

const genStar = (r) => {
  return new Vector3().setFromSpherical(
    new Spherical(
      r,
      Math.acos(1 - Math.random() * 2),
      Math.random() * 2 * Math.PI
    )
  );
};

export const Stars = React.forwardRef(
  (
    {
      radius = 10,
      depth = 30,
      count = 20,
      saturation = 3,
      factor = 4,
      fade = true
    },
    ref
  ) => {
    const material = useRef(StarfieldMaterial);
    const [position, color, size] = useMemo(() => {
      const positions = [];
      const colors = [];
      const sizes = Array.from(
        { length: count },
        () => (5 + 5 * Math.random()) * factor
      );
      const color = new Color();
      let r = radius + depth;
      const increment = depth / count;
      for (let i = 0; i < count; i++) {
        r -= increment * Math.random();
        positions.push(...genStar(r).toArray());
        color.setHSL(i / count, saturation, 0.9);
        colors.push(0.77, 0.32, 0.16);
      }
      console.log("colors", colors);
      return [
        new Float32Array(positions),
        new Float32Array(colors),
        new Float32Array(sizes)
      ];
    }, [count, depth, factor, radius, saturation]);
    useFrame(
      (state) =>
        material.current &&
        (material.current.uniforms.time.value = state.clock.getElapsedTime())
    );
    const [starfieldMaterial] = useState(() => new StarfieldMaterial());
    return React.createElement(
      "points",
      { ref: ref },
      React.createElement(
        "bufferGeometry",
        { attach: "geometry" },
        React.createElement("bufferAttribute", {
          attachObject: ["attributes", "position"],
          args: [position, 3]
        }),
        React.createElement("bufferAttribute", {
          attachObject: ["attributes", "color"],
          args: [color, 3]
        }),
        React.createElement("bufferAttribute", {
          attachObject: ["attributes", "size"],
          args: [size, 1]
        })
      ),
      React.createElement("primitive", {
        dispose: undefined,
        ref: material,
        object: starfieldMaterial,
        attach: "material",
        blending: AdditiveBlending,
        "uniforms-fade-value": fade,
        transparent: true,
        vertexColors: true
      })
    );
  }
);
