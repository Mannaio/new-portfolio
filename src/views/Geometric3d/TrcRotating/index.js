import React, { useState, useRef, Suspense, useMemo, useCallback } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import NewCircle from './CircleLine'
import FullScreenCanvas from './FullScreenCanvas'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'
import triangleLoader from './triangle.svg'

const Cube = () => {
  const ref = useRef()
  useFrame(() => {
    ref.current.rotation.x = ref.current.rotation.y += 0.01
  })
  return (
    <React.Fragment>
      <mesh ref={ref}>
        <boxGeometry />
        <meshBasicMaterial wireframe />
      </mesh>
    </React.Fragment>
  )
}

const Triangle = ({ color, ...props }) => {
  const ref = useRef()
  const [r] = useState(() => Math.random() * 10000)
  useFrame((_) => (ref.current.position.y = -1.76 + Math.sin(_.clock.elapsedTime + r) / 10))
  const { paths: [path] } = useLoader(SVGLoader, triangleLoader) // prettier-ignore
  console.log('path------', path);
  const geom = useMemo(() => SVGLoader.pointsToStroke(path.subPaths[0].getPoints(), path.userData.style), [])
  return (
    <group ref={ref}>
      <mesh geometry={geom} {...props}>
        <meshBasicMaterial wireframe color={color} toneMapped={false} />
      </mesh>
    </group>
  )
}

export default function TrcRotating() {

    return (
      <FullScreenCanvas>
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
        <Suspense fallback={null}>
          <Cube />
          <NewCircle linewidth={2} />
          <Triangle color="#ff2060" scale={0.009} rotation={[0, 0, Math.PI / 3]} />
        </Suspense>
      </FullScreenCanvas>
    )
}
