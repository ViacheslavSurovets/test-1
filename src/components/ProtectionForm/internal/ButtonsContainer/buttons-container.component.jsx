import React from 'react'
import P from 'prop-types'

import './buttons-container.styles.scss'

const ButtonsContainerComponent = ({ onDataSending, isValid }) => (
	<div className="buttons-container">
		<button
			onClick={onDataSending}
			type="button"
			disabled={!isValid()}
			className="buttons-container__button buttons-container__button_big"
		>
			Submit
		</button>
		<button type="button" className="buttons-container__button buttons-container__button_small">Resend Code</button>
	</div>
)

export default ButtonsContainerComponent

ButtonsContainerComponent.propTypes = {
	onDataSending: P.func.isRequired,
	isValid: P.func.isRequired,
}
