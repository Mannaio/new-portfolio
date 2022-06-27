import React from 'react'

import HeroImage from '../../../../assets/images/hero-image.png'
import HeaderBg from '../../../../assets/images/header__bg.png'
import Button from '../../../common/Button'

import './style.scss'

export const Banner = () => {
	return (
		<div className='banner'>
			<div className='banner__container'>
				<div className='banner__content'>
					<h3>HELLO, I’M TOMMASO VILLA</h3>
					<h1>Front End - UI Engineer</h1>
					<h5>
						I’m an Italian Front end Engineer
						focused on the{' '}
						<span className='text-highlight'>
							React framework
						</span>
						. I have also gained experience as a consultant,&nbsp;
						<span className='text-highlight'>
							UX/UI designer and developer
						</span>
						.&nbsp;Additionally, i enjoy building for fun synthesizers with Web Audio API and graphic animations with Threejs. I commit code
						to{' '}
						<a
							className='github'
							href='https://github.com/Mannaio'
							target='_blank'
							rel='noopener noreferrer'>
							Github.
						</a>
					</h5>
					<a href='#recent-projects'>
						<Button
							label='View projects'
							variant='outline'
						/>
					</a>
				</div>
			</div>
		</div>
	)
}
export default Banner
