import React from 'react'

import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

import './style.scss'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer__container'>
				<h4>Follow me on social media</h4>
				<div className='footer__social-icons'>
					<a
						href='https://github.com/Mannaio'
						rel='noopener noreferrer'>
						{' '}
						<GitHubIcon className='social-icon' />
					</a>
					<a
						href='https://www.linkedin.com/in/tommasovillafreelance/'
						rel='noopener noreferrer'>
						<LinkedInIcon className='social-icon' />
					</a>
				</div>
				<p>
					Designed and developed by Villa Tommaso. Built
					with React. Hosted on Google Cloud.
				</p>
			</div>
		</div>
	)
}

export default Footer
