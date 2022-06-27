import React from 'react'
import './style.scss'

type ArtPropType = {
	image: string
	title: string
	link: string
	children: any
}

const Art: React.FC<ArtPropType> = ({
	image,
	title,
	link,
	children
}) => {
	return (
		<div className='art-item'>
			<div className='art-item__logo'>
				<div className='art__circle'>
					<div className='art__icon'>
						<a href={link}>
							<img src={image} alt={title} />
						</a>
					</div>
				</div>
			</div>
			<div className='art-item__content'>
				<h4>{title}</h4>
				<div className='rp-card__buttons'>{children}</div>
			</div>
		</div>
	)
}

export default Art
