import React from 'react'
import { motion } from 'framer-motion'
import { generateKey } from '../services/key-generator'
import { skills } from '../data/data'
import { SkillCard } from './SkillCard'
import { load_variants } from '../services/motion-variants'

export const About = () => {
	return (
		<motion.div
			className='about'
			variants={load_variants}
			initial='hidden'
			animate='visible'
			exit='exit'
		>
			<h6 className='about__intro'>
				Result - oriented, highly motivated Software
				Developer.Proficient both in Frontend
				(<code>JavaScript</code>) and Backend technologies 
				(<code> C# </code>).
			</h6>
			<div className='container about__container'>
				<h6 className='about__heading'> What I offer </h6>
				<div className='row'>
					{skills.map(skill => (
						<SkillCard skill={skill} key={generateKey(skill.title)} />
					))}
				</div>
			</div>
		</motion.div>
	)
}
