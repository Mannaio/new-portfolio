import React from 'react'
import Header from 'components/landing/Header/Header'
import Skills from 'components/landing/Skills'
import RecentProjects from 'components/landing/RecentProjects'
import Experience from 'components/landing/Experience'
import DigitalArt from 'components/landing/DigitalArt'
import CtaCard from 'components/common/CtaCard'
import Footer from 'components/common/Footer'
import { initGA } from 'index'

import './style.scss'

const Home = () => {
	React.useEffect(() => {
		initGA()
	}, [])
	return (
		<div>
			<Header />
			<Skills />
			<RecentProjects />
			<DigitalArt />
			<Experience />
			<CtaCard
				title='Interested in Collaboration?'
				detail='Let’s have a conversation! I’d love to hear about
					what you’re working on and find a way to work
					together.'
				btVariant='solid'
				label='Get in touch'
			/>
			<Footer />
		</div>
	)
}

export default Home
