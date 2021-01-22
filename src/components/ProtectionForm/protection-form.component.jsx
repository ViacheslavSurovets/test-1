import React, { Fragment } from 'react'

import { CheckboxComponent, ButtonsContainerComponent } from './internal'
import './protection-form.styles.scss'
import { PROTECTION_FORM_DEFAULT_CONSTANTS } from '../../constants'
import { isCodeStringValid, onDataSending } from './protection-form.utils'
import { useInput, useChooseStatusTextClass } from './protection-form.hooks'

const { DASH_INDEX, INPUTS_COUNT } = PROTECTION_FORM_DEFAULT_CONSTANTS


const ProtectionFormComponent = () => {
	const { onChange, onKeyDown, values, inputRefs, status, codeString } = useInput()
	const { currentStatus, message } = status

	return (
  <div className='protection-form'>
    <h2 className='protection-form__header'>
      Enter your 6-Digit
      <br />
      Authentication Code
    </h2>

    <div className='protection-form__input-container'>
      {
      	values.map( (n, i) => (
						// eslint-disable-next-line react/no-array-index-key
        	<Fragment key={i}>
          	{ (i === DASH_INDEX) && <div className='dash' /> }
          	<input
            	className='protection-form-input'
            	value={values[ i ]}
            	onChange={(e) => onChange( e, i )}
            	ref={input => { inputRefs[ i ] = input }}
            	maxLength={i === 0 ? INPUTS_COUNT : '1'}
            	required
            	onKeyDown={onKeyDown}
          	/>
        	</Fragment>
						)
					)
				}
    </div>
		
    <CheckboxComponent />
    <span className={`protection-form__status-text ${ useChooseStatusTextClass( currentStatus ) }`}>
      { message }
    </span>
    <ButtonsContainerComponent
      isValid={() => isCodeStringValid( codeString, true )}
      onDataSending={() => onDataSending( codeString )}
    />
  </div>
	)
}

export default ProtectionFormComponent
