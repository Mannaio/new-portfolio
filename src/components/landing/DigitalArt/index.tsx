import React from 'react'
import Card from './Card'
import { DigitalArtData } from './data'
import Button from '../../common/Button'
import { Link } from "react-router-dom";

import './style.scss'
function DigitalArt() {
	return (
		<div id='recent-projects' className='recent-projects'>
			<div className='recent-projects__container'>
				<div className='section__title'>
					<h3>Digital Experiments</h3>
				</div>
				<div className='recent-projects__cards'>
				{DigitalArtData.map(
						(card: any) =>
							card.image && (
								<Card {...card}>
									{card.button && (
										<a
											rel='noopener noreferrer'
											href={card.button.link}
											target='_blank'>
											<Button
												variant='normal'
												label={card.button.label}
											/>{' '}
										</a>
									)}
								</Card>
							),
					)}
				</div>
			</div>
		</div>
	)
}

export default DigitalArt
