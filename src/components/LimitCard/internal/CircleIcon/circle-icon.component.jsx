import React from 'react'

import PropTypes from 'prop-types'

const CircleIconComponent = ({ text }) => {
	const color = text === 'Available' && '#efeeee'

	return (
		<svg width="20" height="20">
			<path d="M10,0 a1,1 0 0,0 0,20" fill={color || '#00c969'} />
			<path d="M10,20 a1,1 0 0,0 0,-20" fill={color || '#000584'} />
		</svg>
	)
}

export default CircleIconComponent

CircleIconComponent.propTypes = {
	text: PropTypes.string.isRequired,
}
