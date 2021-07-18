import React from 'react'
import {
	Redirect,
	Route,
	Switch,
	useLocation
} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { Resume } from './components/Resume'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { AnimatePresence } from 'framer-motion'

export const App = () => {
	const location = useLocation()
	return (
			<div className='App'>
				<div className='container app__container'>
					<div className='row app__row'>
						<div className='col-lg-3'>
							<Sidebar />
						</div>
						<div className='col-lg-9 app__main-content'>
							<Navbar />
							<AnimatePresence exitBeforeEnter>
								<Switch location={location} key={location.key}>
									<Route path='/' exact component={About} />
									<Route path='/resume' component={Resume} />
									<Route path='/projects' component={Projects} />
									<Route>
										<Redirect to='/' />
									</Route>
								</Switch>
							</AnimatePresence>
						</div>
					</div>
				</div>
			</div>
	)
}
