import React from 'react'
import {
	BrowserRouter as Router,
	Redirect,
	Route
} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { Resume } from './components/Resume'
import { About } from './components/About'
import { Projects } from './components/Projects'

export const App = () => {
	return (
		<Router>
			<div className='App'>
				<div className='container app__container'>
					<div className='row app__row'>
						<div className='col-lg-3'>
							<Sidebar />
						</div>
						<div className='col-lg-9 app__main-content'>
							<Navbar />
							<Route path='/' exact component={About} />
							<Route path='/resume' component={Resume} />
							<Route path='/projects' component={Projects} />
							<Route>
								<Redirect to='/' />
							</Route>
						</div>
					</div>
				</div>
			</div>
		</Router>
	)
}
