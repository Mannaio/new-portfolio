import React from 'react'
import { GeometricThreeDArtData } from './data'
import { Link } from "react-router-dom"
import Button from '../../common/Button'
import Art from '../../common/Art'
import './style.scss'

type ArtsPropType = {
	title?: string
}

const Arts: React.FC<ArtsPropType> = ({
	title
}) => {
	return (
		<div id='skills' className='skills'>
			<div className='skills__container'>
				<div className='section__title'>
					<h3>{title}</h3>
				</div>
				<div className='skills__lists'>
				{GeometricThreeDArtData.map(
						(card: any) =>
							card.image && (
								<Art {...card}>
									{card.button && (
										<Link
											rel='noopener noreferrer'
											to={card.button.link}
											target='_blank'>
											<Button
												variant='normal'
												label={card.button.label}
											/>{' '}
										</Link>
									)}
								</Art>
							),
					)}
				</div>
			</div>
		</div>
	)
}

export default Arts
