import React from 'react'

import Skill from './Skill'
import figmaIcon from 'assets/icons/figma'
import reactIcon from 'assets/icons/react-icon'
import nodeIcon from 'assets/icons/node'
import sassIcon from 'assets/icons/sass'
import pythonIcon from 'assets/icons/python'
import uxIcon from 'assets/icons/ux'
import './style.scss'

function Skills() {
	return (
		<div id='skills' className='skills'>
			<div className='skills__container'>
				<div className='section__title'>
					<h3>My skill set</h3>
				</div>
				<div className='skills__lists'>
					<Skill
						name='Front-end'
						detail='React, , Javascript, Typescript, Threejs, Redux, REST API’s, JSON'
						icon={reactIcon}
					/>
					<Skill
						name='Back-end'
						detail='Node, Express, Nextjs'
						icon={nodeIcon}
					/>
					<Skill
						name='Style/Library'
						detail='CSS, SASS, LESS, Material UI, Style Guides, UI Components'
						icon={sassIcon}
					/>
					<Skill
						name='UX/UI'
						detail='Research, user journey, wireframe, prototype, interaction, test'
						icon={uxIcon}
					/>
					<Skill
						name='Tools'
						detail='Figma, Draw.io, Adobe suite, Jira'
						icon={figmaIcon}
					/>
				</div>
			</div>
		</div>
	)
}

export default Skills
