import React, { useState } from 'react'
import { data_projects } from '../data/data'
import { generateKey } from '../services/key-generator'
import { Project } from './Project'
import { motion } from 'framer-motion'
import { load_variants } from '../services/motion-variants'

export const Projects = () => {
	const [projects, setProjects] = useState(data_projects)

	const handleFilter = name => {
		const data = data_projects.filter(project =>
			project.category.includes(name)
		)
		setProjects(data)
	}

	return (
		<div className='container projects'>
			<div className='projects__navbar'>
				<div onClick={() => setProjects(data_projects)}>All</div>
				<div onClick={() => handleFilter('web')}>Web</div>
				<div onClick={() => handleFilter('desktop')}>Desktop</div>
				<div onClick={() => handleFilter('mobile')}>Mobile</div>
				<div onClick={() => handleFilter('other')}>Other</div>
			</div>
			<motion.div
				className='row'
				variants={load_variants}
				initial='hidden'
				animate='visible'
				exit='exit'
			>
				{projects.length ? (
					projects.map(project => (
						<Project
							project={project}
							key={generateKey(project.github_url + project.name)}
						/>
					))
				) : (
					<h5 className='projects__empty'>
						There are no projects in this category yet...
					</h5>
				)}
			</motion.div>
		</div>
	)
}
