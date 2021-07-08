import React from 'react'
import { Sidebar } from './components/Sidebar'
import { Main } from './Main'

export const App = () => {
	return (
		<div className='App'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-3'>
						<Sidebar />
					</div>
					<div className='col-lg-9 app__main-content'>
						<Main />
					</div>
				</div>
			</div>
		</div>
	)
}
