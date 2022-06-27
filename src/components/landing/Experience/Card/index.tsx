import React from 'react'

import './style.scss'

type ExperienceCardPropType = {
	logo?: string
	title: string
	status: string
	company: string
	time?: string
}

const ExperienceCard: React.FC<ExperienceCardPropType> = ({
	logo,
	title,
	status,
	company,
	time,
}) => {
	return (
		<div className='experience-card'>
			<div className='experience-card__container'>
				<div className='experience-card__logo'>
					<p className='experience-card__title'>{company}</p>
				</div>
				<p className='experience-card__title--content'>{title}</p>
				<p className='experience-card__progress'>
					{status}
				</p>

				<p className='experience-card__time'>{time}</p>
			</div>
		</div>
	)
}

export default ExperienceCard
