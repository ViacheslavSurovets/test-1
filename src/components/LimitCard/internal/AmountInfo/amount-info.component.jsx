import React from 'react'
import PropTypes from 'prop-types'

import { AmountInfoItem } from '..'
import './amoutn-info.styles.scss'

const AmountInfoComponent = ({ data: { total, id, ...rest } }) => {
	const dataArray = Object.entries(rest)

	return (
		<div className="amount-info-component">
			{
				// eslint-disable-next-line react/no-array-index-key,max-len
				dataArray && dataArray.map((item, idx) => <AmountInfoItem key={idx} data={item} total={total} />)
			}
		</div>
	)
}

export default AmountInfoComponent

AmountInfoComponent.propTypes = {
	data: PropTypes.object.isRequired,
}
