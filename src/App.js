import React from 'react'
import { Navbar } from './components/Navbar'
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
						<Navbar />
					</div>
				</div>
			</div>
		</div>
	)
}
