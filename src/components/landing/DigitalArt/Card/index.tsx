import React from 'react'
import './style.scss'
import { Link } from "react-router-dom";

type DigitalArtCardPropType = {
	image: string
	title: string
	link: string
	detail: string
	children: any
}
const Card: React.FC<DigitalArtCardPropType> = ({
	title,
	image,
	link,
	detail,
	children,
}) => {
	return (
		<div className='rp-card'>
			<div className='rp-card__image'>
				<a href={link}>
					<img src={image} alt={title} />
				</a>
			</div>
			<div className='rp-card__contents'>
				<h4>{title}</h4>
				<p>{detail}</p>
				<div className='rp-card__buttons'>{children}</div>
			</div>
		</div>
	)
}

export default Card
