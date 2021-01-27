import React from 'react'
import PropTypes from 'prop-types'

const LimitGraphicInfoIconComponent = ({ greenLineWidth, blueLineWidth }) => (
	<svg width="200" height="200">
		<circle
			cx="100"
			cy="100"
			r="90"
			stroke="#efeeee"
			fill="transparent"
			strokeWidth="10"
		/>
		<circle
			cx="100"
			cy="100"
			r="90"
			strokeDasharray={`${greenLineWidth} 600`}
			stroke="#00c969"
			fill="transparent"
			strokeLinecap="round"
			strokeWidth="10"
		/>

		<circle
			cx="100"
			cy="100"
			r="90"
			strokeDasharray={`${blueLineWidth} 600`}
			stroke="#000584"
			fill="transparent"
			strokeLinecap="round"
			strokeWidth="10"
		/>
	</svg>
)

export default LimitGraphicInfoIconComponent

LimitGraphicInfoIconComponent.propTypes = {
	greenLineWidth: PropTypes.string.isRequired,
	blueLineWidth: PropTypes.string.isRequired,
}
