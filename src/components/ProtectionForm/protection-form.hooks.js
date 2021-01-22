import { useState } from 'react'

import { PROTECTION_FORM_STATUS_CONSTANTS, PROTECTION_FORM_DEFAULT_CONSTANTS } from '../../constants'
import { charValidator, isCodeStringValid } from './protection-form.utils'

const { SUCCESS, PENDING, FAILURE } = PROTECTION_FORM_STATUS_CONSTANTS
const { INPUTS_COUNT, DELETE_KEY } = PROTECTION_FORM_DEFAULT_CONSTANTS


export const useInput = () => {
    const [ values, setValues ] = useState( Array( INPUTS_COUNT ).fill( '' ) )
    const [ status, setStatus ] = useState( {
        currentStatus: '',
        message: ''
    } )

    const inputRefs = []
    let keyCode
    let areCharsValid = true
	
    const codeString = values.join( '' )

    const onKeyDown = event => {
			keyCode = event.code
		}

    // const onChange = ({ target: { value, dataset: { index: idx } } }) => {
    const onChange = ({ target: { value } }, idx) => {
        const index = +idx
        const inputRefsIndexIncrease = inputRefs[ index + 1 ]
        const inputRefsIndexDecrease = inputRefs[ index - 1 ]

        areCharsValid = charValidator( value, status, setStatus )

        if (value.length > 1) {
            setValues( values.map( (n, i) => value[ i ] ) )
            
        } else {
            setValues( values.map( (n, i) => i === index ? value.charAt( 0 ) : n ) )
        }

        if (keyCode === DELETE_KEY && codeString.length && index > 0) {
            inputRefsIndexDecrease.focus()
        }

        if (keyCode !== DELETE_KEY && index < values.length - 1 && value && codeString.length < 6) {
            inputRefsIndexIncrease.focus()
            inputRefsIndexIncrease.select()
        }
    }

    if (codeString.length < INPUTS_COUNT && isCodeStringValid( codeString ) && status.currentStatus !== PENDING) {
        setStatus( { ...status, currentStatus: PENDING } )
    }

    if (
        isCodeStringValid( codeString, true )
        && areCharsValid
        && status.currentStatus !== SUCCESS
    ) {
        setStatus( {
            ...status,
            currentStatus: SUCCESS,
            message: 'Everything is good'
        } )
    }

    return {
        onChange,
        onKeyDown,
        values,
        inputRefs,
        codeString,
        status
    }
}

export const useChooseStatusTextClass = (currentStatus) => {
    const cases = {
        [ SUCCESS ]: 'protection-form__status-text_green',
        [ PENDING ]: 'protection-form__status-text_pending',
        [ FAILURE ]: 'protection-form__status-text_red'
    }

    return cases[ currentStatus ]
}
