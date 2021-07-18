import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navbar_variants } from '../services/motion-variants'

export const Navbar = () => {
	const [active, setActive] = useState('')
	useEffect(() => {
		let currentUrl = window.location.href
		if (currentUrl.endsWith('/')) setActive('About')
		else if (currentUrl.endsWith('/projects')) setActive('Projects')
		else if (currentUrl.endsWith('resume')) setActive('Resume')
	}, [active])

	return (
		<motion.div
			className='navbar'
			variants={navbar_variants}
			initial='hidden'
			animate='visible'
		>
			<div className='navbar__active'>{active}</div>
			<div className='navbar__items'>
				{active !== 'About' && (
					<Link to='/'>
						<div
							className='navbar__item'
							onClick={() => setActive('About')}
						>
							About
						</div>
					</Link>
				)}

				{active !== 'Resume' && (
					<Link to='resume'>
						<div
							className='navbar__item'
							onClick={() => setActive('Resume')}
						>
							Resume
						</div>
					</Link>
				)}
				{active !== 'Projects' && (
					<Link to='projects'>
						<div
							className='navbar__item'
							onClick={() => setActive('Projects')}
						>
							Projects
						</div>
					</Link>
				)}
			</div>
		</motion.div>
	)
}
