import React from 'react'

export const SkillCard = ({ skill: { icon, title, about } }) => (
	<div className='col-lg-6'>
		<div className='skill-card'>
			<img src={icon} alt='skill-icon' className='skill-card__icon' />
			<div className='skill-card__body'>
				<h6 className='skill-card__title'>{title}</h6>
				<p className='skill-card__content'>{about}</p>
			</div>
		</div>
	</div>
)
