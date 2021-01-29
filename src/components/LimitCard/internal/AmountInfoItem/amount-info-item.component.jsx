import React from 'react'

import './amount-info-item.styles.scss'
import PropTypes from 'prop-types'
import { CircleIcon, AttentionIcon } from '..'

const AmountInfoItemComponent = ({ data }) => {
	// eslint-disable-next-line prefer-const
	let [text, value] = data
	text = text[0].toUpperCase() + text.slice(1)

	return (
		<div className="amount-info-item-component">
			<span className="amount-info-item-component__text">
				{text}
				{/* eslint-disable-next-line */}
				{text === 'Spent' && <AttentionIcon />}
			</span>

			<div className="amount-info-item-component__result">
				<CircleIcon text={text} />
				<span className="text__bold text__big">{ value }</span>
			</div>
		</div>
	)
}

export default AmountInfoItemComponent

AmountInfoItemComponent.propTypes = {
	data: PropTypes.array.isRequired,
}
