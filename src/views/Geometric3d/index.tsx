import React from 'react'
import Arts3d from 'components/threejs/Arts3d'
import { initGA } from 'index'

import './style.scss'

const Geometric3d = () => {
	React.useEffect(() => {
		initGA()
	}, [])
	return (
		<div>
			<Arts3d title={"3D Geometric Rotations"} />
		</div>
	)
}

export default Geometric3d
