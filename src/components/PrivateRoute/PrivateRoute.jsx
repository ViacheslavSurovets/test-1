import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import P from 'prop-types'

const PrivateRoute = ({ component: Component, ...rest }) => {
	const isAuthenticated =	window.localStorage.getItem('test')

	return (
		<Route
			{...rest}
			render={(props) => (isAuthenticated !== '111111' ? (
				<Redirect to="/login" />
			) : (
				<Component {...props} />
			))}
		/>
	)
}

export default PrivateRoute

PrivateRoute.propTypes = {
	component: P.func.isRequired,
}
