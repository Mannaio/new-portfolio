import React from 'react'
import { Canvas } from '@react-three/fiber'

const FullScreenCanvas = (props) => {
  const { children } = props

  const { innerWidth, innerHeight } = window

  return (
    <Canvas
      style={{
        width: innerWidth + 'px',
        height: innerHeight + 'px',
        // background: 'yellow'
      }}
    >
      {children}
    </Canvas>
  )
}

export default FullScreenCanvas
