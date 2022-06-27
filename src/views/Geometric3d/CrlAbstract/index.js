import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Line } from '@react-three/drei'
import CircleLine from './CircleLine'
import { Vector3 } from 'three'
import * as THREE from 'three';
import FullScreenCanvas from './FullScreenCanvas'

const hilbert3D = ( center = new THREE.Vector3( 0, 0, 0 ), size = 10, iterations = 1, v0 = 0, v1 = 1, v2 = 2, v3 = 3, v4 = 4, v5 = 5, v6 = 6, v7 = 7 ) => {

  // Default Vars
  const half = size / 2;
  const vec_s = [ new THREE.Vector3( center.x - half, center.y + half, center.z - half ), new THREE.Vector3( center.x - half, center.y + half, center.z + half ), new THREE.Vector3( center.x - half, center.y - half, center.z + half ), new THREE.Vector3( center.x - half, center.y - half, center.z - half ), new THREE.Vector3( center.x + half, center.y - half, center.z - half ), new THREE.Vector3( center.x + half, center.y - half, center.z + half ), new THREE.Vector3( center.x + half, center.y + half, center.z + half ), new THREE.Vector3( center.x + half, center.y + half, center.z - half ) ];
  const vec = [ vec_s[ v0 ], vec_s[ v1 ], vec_s[ v2 ], vec_s[ v3 ], vec_s[ v4 ], vec_s[ v5 ], vec_s[ v6 ], vec_s[ v7 ] ]; // Recurse iterations

  if ( -- iterations >= 0 ) {

    return [ ...hilbert3D( vec[ 0 ], half, iterations, v0, v3, v4, v7, v6, v5, v2, v1 ), ...hilbert3D( vec[ 1 ], half, iterations, v0, v7, v6, v1, v2, v5, v4, v3 ), ...hilbert3D( vec[ 2 ], half, iterations, v0, v7, v6, v1, v2, v5, v4, v3 ), ...hilbert3D( vec[ 3 ], half, iterations, v2, v3, v0, v1, v6, v7, v4, v5 ), ...hilbert3D( vec[ 4 ], half, iterations, v2, v3, v0, v1, v6, v7, v4, v5 ), ...hilbert3D( vec[ 5 ], half, iterations, v4, v3, v2, v5, v6, v1, v0, v7 ), ...hilbert3D( vec[ 6 ], half, iterations, v4, v3, v2, v5, v6, v1, v0, v7 ), ...hilbert3D( vec[ 7 ], half, iterations, v6, v5, v2, v1, v0, v3, v4, v7 ) ];

  } // Return complete Hilbert Curve.


  return vec;

}

const RotatingLine = (props) => {
  const { linewidth } = props
  const ref = useRef()
  useFrame(() => {
    ref.current.rotation.z += 0.01
  })
  return <Line ref={ref} points={[0, 0, 0, 1, 0, 0]} linewidth={linewidth} color={0xffffff} />
}

const AbstractionLine = (props) => {
  const { linewidth, points } = props
  return <Line points={points} linewidth={linewidth} color={0xffffff} />
}

export default function CrlAbstract() {
  const arrayPoints = hilbert3D(new Vector3(0), 5).map((p) => [p.x, p.y, p.z])
  const circlepoints = []
  for (let i = 0; i <= 360; i++) {
    circlepoints.push(Math.sin(i * (Math.PI / 180)) * 1, Math.cos(i * (Math.PI / 180)) * 1, 0)
  }
  const circle = circlepoints

  return (
    <FullScreenCanvas>
      <OrbitControls />
      <CircleLine linewidth={1} points={circle} />
      <RotatingLine linewidth={1} />
      <AbstractionLine points={arrayPoints} linewidth={1} />
    </FullScreenCanvas>
  )
}
