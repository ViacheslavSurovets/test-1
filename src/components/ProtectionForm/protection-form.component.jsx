import React, { Fragment, useState } from 'react'

import { CheckboxComponent, ButtonsContainerComponent } from './internal'
import './protection-form.styles.scss'
import { PROTECTION_FORM_STATUS_CONSTANTS } from '../../constants'
import { charValidator, chooseStatusTextClass, isCodeStringValid, onDataSending } from './protection-form.utils'


const ProtectionFormComponent = ( props ) => {
    const [ values, setValues ] = useState( Array( 6 ).fill( '' ) )
    const [ status, setStatus ] = useState( {
        currentStatus: '',
        message: ''
    } )

    const codeString = values.join( '' )
    const inputRefs = []
    let keyCode
    let areCharsValid = true

    const onKeyDown = event => keyCode = event.keyCode


    const onChange = ( { target: t } ) => {
        const
            index = +t.dataset.index,
            value = t.value

        areCharsValid = charValidator( value, status, setStatus )


        if ( value.length > 1 ) {
            setValues( values.map( ( n, i ) => value.charAt( i ) ) )
            return
        } else {
            setValues( values.map( ( n, i ) => i === index ? value.charAt( 0 ) : n ) )
        }

        if ( keyCode === 8 && codeString.length && index > 0 ) {
            inputRefs[ index - 1 ].focus()
        }

        if ( keyCode !== 8 && index < values.length - 1 && value && codeString.length < 6 ) {
            inputRefs[ index + 1 ].focus()
            inputRefs[ index + 1 ].select()
        }
    }

    if(codeString.length < 6 && isCodeStringValid(codeString) && status.currentStatus !== PROTECTION_FORM_STATUS_CONSTANTS.PENDING ) {
        setStatus({...status, currentStatus: PROTECTION_FORM_STATUS_CONSTANTS.PENDING })
    }

    if (
        isCodeStringValid( codeString , 'wholeString' ) &&
        areCharsValid &&
        status.currentStatus !== PROTECTION_FORM_STATUS_CONSTANTS.SUCCESS
    ) {
        setStatus( {
            ...status,
            currentStatus: PROTECTION_FORM_STATUS_CONSTANTS.SUCCESS,
            message: 'Everything is good'
        } )
    }


    return (
        <div className='protection-form'>
            <h2 className='protection-form__header'>Enter your 6-Digit <br/> Authentication Code</h2>

            <div className='protection-form__input-container'>
                {
                    values.map( ( n, i ) =>
                        <Fragment key={ i }>
                            { (i === 3) && <div className='dash'/> }
                            <input className='input-component'
                                   value={ values[ i ] }
                                   data-index={ i }
                                   onChange={ onChange }
                                   ref={ input => inputRefs[ i ] = input }
                                   maxLength={ i === 0 ? "6" : "1" }
                                   required
                                // maxLength="1"
                                   onKeyDown={ onKeyDown }
                            />
                        </Fragment>
                    )
                }
            </div>
            <CheckboxComponent/>
            <span className={ chooseStatusTextClass(status) }>{ status.message }</span>
            <ButtonsContainerComponent isValid={ () => isCodeStringValid( codeString, 'wholeString' ) }
                                       onDataSending={() => onDataSending(codeString) }/>
        </div>
    )
}

export default ProtectionFormComponent
