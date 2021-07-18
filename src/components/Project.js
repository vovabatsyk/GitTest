import React from 'react'
import github from '../assets/icons/github.svg'

export const Project = ({
	project: { name, image, deployed_url, github_url, technology }
}) => {
	return (
		<div className='projectCard my-2     col-md-6 col-lg-4'>
			<figure className='projectCard__wrapper'>
				<a
					href={deployed_url == '' ? github_url : deployed_url}
					target='_blank'
					rel='noopener noreferrer'
				>
					<img
						src={image}
						alt={name}
						className='projectCard__image'
					/>
				</a>
				<div className='projectCard__title'>
					<a
						href={github_url}
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src={github}
							alt='github link'
							className='projectCard__icon'
						/>
					</a>
					<div className='mr-2'>
						{name}
						<div>
							<code>({technology})</code>
						</div>
					</div>
				</div>
			</figure>
		</div>
	)
}
