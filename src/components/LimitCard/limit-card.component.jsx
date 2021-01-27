import React from 'react'

import './limit-card.styles.scss'

import PropTypes from 'prop-types'
import { AmountInfoComponent, LimitGraphicInfoComponent } from './internal'

const LimitCardComponent = ({ data }) => (
	<div className="limit-card-component">
		<AmountInfoComponent data={data} />
		<LimitGraphicInfoComponent data={data} />
	</div>
)

export default LimitCardComponent

LimitCardComponent.propTypes = {
	data: PropTypes.object.isRequired,
}
