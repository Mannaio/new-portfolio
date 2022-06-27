import React from 'react'
import Flats from 'components/threejs/Flats'
import { initGA } from 'index'

import './style.scss'

const FlatGeometrc = () => {
	React.useEffect(() => {
		initGA()
	}, [])
	return (
		<div>
			<Flats title={'Flat Geometric Rotations'}/>
		</div>
	)
}

export default FlatGeometrc
