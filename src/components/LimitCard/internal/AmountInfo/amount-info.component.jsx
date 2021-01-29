import React from 'react'
import PropTypes from 'prop-types'

import { AmountInfoItem } from '..'
import './amoutn-info.styles.scss'

const AmountInfoComponent = ({ data: { total, id, ...rest } }) => {
	const dataArray = Object.entries(rest) || []

	return (
		<div className="amount-info-component">
			{
				dataArray && dataArray.map((item, idx) => <AmountInfoItem key={idx} data={item} />)
			}
		</div>
	)
}

export default AmountInfoComponent

AmountInfoComponent.propTypes = {
	data: PropTypes.object.isRequired,
}
