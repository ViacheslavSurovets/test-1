import React from 'react'
import PropTypes from 'prop-types'

import { AttentionIcon, LimitGraphicInfoIcon } from '..'
import './limit-graphic-info.styles.scss'

const LimitGraphicInfoComponent = ({ data: { spent, total } }) => {
	const greenLineWidth = Math.round(560 * (spent / total))
	const blueLineWidth = Math.round(greenLineWidth * 0.66)

	return (
		<div className="limit-graphic-info">
			<div className="limit-graphic-info__container">
				<div className="limit-graphic-info__icon">
					<LimitGraphicInfoIcon greenLineWidth={greenLineWidth} blueLineWidth={blueLineWidth} />
				</div>
				<div className="limit-graphic-info__text-container">
					<span className="text__bold text__big">{`$${total}`}</span>
					<span className="text__bold text__middle text__gray">Limit</span>
					<span className="text text__bold text__middle text__gray">
						+ Credits
						<AttentionIcon />
					</span>
				</div>
			</div>
		</div>
	)
}

export default LimitGraphicInfoComponent

LimitGraphicInfoComponent.propTypes = {
	data: PropTypes.object.isRequired,
}
