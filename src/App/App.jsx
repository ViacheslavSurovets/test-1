import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {
	ProtectionForm, LogoComponent, TableComponent, PrivateRoute,
} from '../components'
import './App.scss'
import { LimitCardComponent } from '../components/LimitCard'

const mockLimitCardData = {
	available: '30000',
	spent: '30000',
	total: '40000',
	id: '1',
}

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
			<Route
				path="/graphic"
				render={() => (
					<div className="limit-card-component-wrapper">
						<LimitCardComponent data={mockLimitCardData} />
					</div>
				)}
			/>
		</Switch>
	</>
)

export default App
