import { PROTECTION_FORM_STATUS_CONSTANTS, PROTECTION_FORM_DEFAULT_CONSTANTS } from '../../constants'

const { FAILURE } = PROTECTION_FORM_STATUS_CONSTANTS
const { INPUTS_COUNT } = PROTECTION_FORM_DEFAULT_CONSTANTS

export const isCodeStringValid = ( codeString, wholeString ) => {
    if ( wholeString && codeString.length < INPUTS_COUNT ) {
        return false
    }
    const testCodeString = +codeString
    Number( testCodeString )
    return !Number.isNaN( testCodeString )
}


export const charValidator = ( value, status, setStatus ) => {
    let charValidatorStatus = false
    const testCodeString = +value
    Number( testCodeString )

    if ( Number.isNaN( testCodeString ) ) {
        charValidatorStatus = true
    }

    if ( charValidatorStatus ) {
        setStatus( {
            ...status,
            message: 'The value should be only a numbers',
            currentStatus: FAILURE
        } )

        return false
    }
}

// export const chooseStatusTextClass = ( {currentStatus} ) => {
//     switch ( currentStatus ) {
//         case SUCCESS:
//             return 'protection-form__status-text_green'
//         case PENDING:
//             return 'protection-form__status-text_pending'
//         case FAILURE:
//             return 'protection-form__status-text_red'
//
//         default:
//             return undefined
//     }
// }


export const onDataSending = ( codeString ) => {
	// eslint-disable-next-line no-alert
     alert( `codeString is ${ codeString }` )
}
