import React, { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import FullScreenCanvas from "./FullScreenCanvas";
import { Stars } from "./stars";


export default function BlurCircles() {

    return (
      <FullScreenCanvas>
      <PerspectiveCamera
        makeDefault
        position={[500, 0.9, 1.8]}
        fov={60}
        zoom={0.9}
      />
      <OrbitControls
        // minZoom={2}
        // maxAzimuthAngle={20}
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
      />
      <Suspense fallback={null}>
        <Stars />
        {/* <PlanGeometry /> */}
      </Suspense>
    </FullScreenCanvas>
    )
}
