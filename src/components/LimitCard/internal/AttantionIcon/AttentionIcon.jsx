import React from 'react'
import PropTypes from 'prop-types'

const AttentionIcon = ({ width = '15', height = '15', color = '#6b6e74' }) => (
	<svg
		version="1.1"
		id="Capa_1"
		x="0px"
		width={width}
		height={height}
		fill={color}
		y="0px"
		viewBox="0 0 512 512"
	>
		<path
			d="M256,0C114.613,0,0,114.617,0,256c0,141.391,114.613,256,256,256s256-114.609,256-256C512,114.617,397.387,0,256,0z
M256,384c-17.674,0-32-14.32-32-32c0-17.672,14.326-32,32-32s32,14.328,32,32C288,369.68,273.674,384,256,384z M288,272h-64
l-16-128c0-8.836,7.164-16,16-16h64c8.836,0,16,7.164,16,16L288,272z"
		/>
		<g />
		<g />
		<g />
		<g />
		<g />
		<g />
		<g />
		<g />
		<g />
		<g />
		<g />
		<g />
		<g />
		<g />
		<g />
	</svg>
)

export default AttentionIcon

AttentionIcon.propTypes = {
	width: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
}
