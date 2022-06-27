import React, { useRef } from 'react'
import { Line } from '@react-three/drei'

const CircleLine = React.memo((props) => {
  const { linewidth, points } = props

  return <Line const points={points} linewidth={linewidth} color={0xffffff} />
})

export default CircleLine
