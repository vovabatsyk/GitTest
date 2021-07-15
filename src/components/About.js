import React from 'react'
import { SkillCard } from './SkillCard'
import api from '../assets/icons/api.svg'
import computer from '../assets/icons/computer.svg'
import repair from '../assets/icons/repair.svg'
import programmer from '../assets/icons/programmer.svg'
import mobile from '../assets/icons/mobile.svg'

const skills = [
	{
		icon: computer,
		title: 'Frontend Development',
		about:
			'I can build a beautiful and scalable SPA using React, Angular or Vue'
	},
	{
		icon: repair,
		title: 'Backend Development',
		about:
			'handle database, server, api using and Microsoft SQL Server'
	},
	{
		icon: api,
		title: 'API Development',
		about: 'I can develop web API using ASP.NET Core'
	},
	{
		icon: computer,
		title: 'Desktop App',
		about: 'I can create desktop app using WPF or Windows Forms'
	},
	{
		icon: mobile,
		title: 'Mobile Development',
		about: 'I use Flutter to develop applications for mobile devices'
	},

	{
		icon: programmer,
		title: 'Competitive Coder',
		about: 'a daily problem solver in HackerRank and Leetcode'
	}
]

export const About = () => {
	const generateKey = pre => {
		return `${pre}_${new Date().getTime()}`
	}
	return (
		<div className='about'>
			<h6 className='about__intro'>
				Result-oriented, highly motivated Software Developer.
				Proficient both in Frontend (<code>JavaScript</code>) and
				Backend technologies (<code>C#</code>).
			</h6>
			<div className='container about__container'>
				<h6 className='about__heading'>What I offer</h6>
				<div className='row'>
					{skills.map(skill => (
						<SkillCard skill={skill} key={generateKey(skill.title)} />
					))}
				</div>
			</div>
		</div>
	)
}
