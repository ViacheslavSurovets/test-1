import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { CheckboxComponent, ButtonsContainerComponent } from './internal'
import './protection-form.styles.scss'
import { PROTECTION_FORM_DEFAULT_CONSTANTS } from '../../constants'
import { isCodeStringValid, authenticate } from './protection-form.utils'
import { useInput, useChooseStatusTextClass } from './protection-form.hooks'
import { InputComponent } from '..'

const { DASH_INDEX, INPUTS_COUNT } = PROTECTION_FORM_DEFAULT_CONSTANTS

const ProtectionFormComponent = ({ history }) => {
	const {
		onChange, onKeyDown, values, inputRefs, status, codeString,
	} = useInput()

	const { message } = status

	return (
		<div className="protection-form">
			<h2 className="protection-form__header">
				Enter your 6-Digit
				<br />
				Authentication Code
			</h2>

			<div className="protection-form__input-container">
				{
					// eslint-disable-next-line
				values.map((n, i) => (
						// eslint-disable-next-line
						<Fragment key={i}>
							{ (i === DASH_INDEX) && <div className="dash" /> }
							<InputComponent
								value={values[i]}
								onChange={(e) => onChange(e, i)}
								ref={(input) => { inputRefs[i] = input }}
								maxLength={i ? '1' : INPUTS_COUNT}
								required
								onKeyDown={onKeyDown}
							/>
						</Fragment>
					))
				}
			</div>
			<CheckboxComponent />
			<span className="protection-form__status-text protection-form__status-text_blue">Valid Code: 111111</span>
			<span className={`protection-form__status-text ${useChooseStatusTextClass(status.currentStatus)}`.trim()}>
				{ message }
			</span>
			<ButtonsContainerComponent
				isValid={() => isCodeStringValid(codeString, true)}
				onDataSending={() => authenticate(codeString, history)}
			/>
		</div>
	)
}

export default ProtectionFormComponent

ProtectionFormComponent.propTypes = {
	history: PropTypes.any.isRequired,
}
