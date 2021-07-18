import React from 'react'
import { motion } from 'framer-motion'
import { sidebar_variants } from '../services/motion-variants'
import facebook from '../assets/icons/facebook.svg'
import linkedin from '../assets/icons/linkedin.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import avatar from '../assets/icons/avatar.jpg'
import resume from '../assets/resume.pdf'

export const Sidebar = () => {
	const handleEmail = () => {
		window.open('mailto:vovabatsyk.lviv@gmail.com')
	}

	return (
		<motion.div
			className='sidebar'
			variants={sidebar_variants}
			initial='hidden'
			animate='visible'
		>
			<img src={avatar} alt='avatar' className='sidebar__avatar' />
			<div className='sidebar__name'>
				Volodymyr <span>Batsyk</span>
			</div>

			<div className='sidebar__item sidebar__title'>
				Software developer
			</div>

			<a href={resume} download='resume.pdf'>
				<div className='sidebar__item sidebar__resume'>
					<img src={tie} alt='resume' className='sidebar__icon' />
					Download CV
				</div>
			</a>

			<figure className='sidebar__social-icons my-2'>
				<a
					href='https://www.facebook.com/vovabatsyk/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img
						src={facebook}
						alt='facebook'
						className='sidebar__icon mr-3 '
					/>
				</a>
				<a
					href='https://www.linkedin.com/in/volodymyr-batsyk-081497151/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img
						src={linkedin}
						alt='instagram'
						className='sidebar__icon'
					/>
				</a>
			</figure>

			<div className='sidebar__contact'>
				<div className='sidebar__item sidebar__github'>
					<a
						href='https://github.com/vovabatsyk'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src={github}
							alt='github'
							className='sidebar__icon'
						/>
					</a>
				</div>
				<div className='sidebar__location'>
					<img src={pin} alt='location' className='sidebar__icon' />
					Ukraine, Lviv
				</div>
				<div className='sidebar__item sidebar_email'>
					vovabatsyk.lviv@gmail.com
				</div>
				<div className='sidebar__item'>+380632021517</div>
			</div>
			<div
				className='sidebar__item sidebar__send-email'
				onClick={handleEmail}
			>
				email me
			</div>
		</motion.div>
	)
}
