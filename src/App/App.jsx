import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {
	ProtectionForm, LogoComponent, TableComponent, PrivateRoute,
} from '../components'
import './App.scss'

const App = () => (
	<>
		<Switch>
			<Route
				path="/login"
				render={({ history }) =>	(
					<div className="App">
						<div className="App__logo">
							<LogoComponent />
						</div>
						<div className="App__protection-form">
							<ProtectionForm history={history} />
						</div>
					</div>
				)}
			/>
			<PrivateRoute exact path="/" component={TableComponent} />
		</Switch>
	</>
)

export default App
