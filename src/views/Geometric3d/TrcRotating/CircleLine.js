import React, { useMemo } from 'react'
import { Line } from '@react-three/drei'

const NewCircle = React.memo((props) => {
  const { linewidth } = props
  const expensiveCalculation = () => {
    const circlepoints = []
    for (let i = 0; i <= 360; i++) {
      circlepoints.push(Math.sin(i * (Math.PI / 180)) * 1, Math.cos(i * (Math.PI / 180)) * 1, 0)
    }
    return circlepoints
  }

  const points = useMemo(() => expensiveCalculation(), [])

  return <Line points={points} linewidth={linewidth} color={0xffffff} />
})

export default NewCircle
