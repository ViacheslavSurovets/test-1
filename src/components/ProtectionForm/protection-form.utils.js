import { PROTECTION_FORM_STATUS_CONSTANTS } from '../../constants'

export const isCodeStringValid = ( codeString, flag ) => {
    if ( flag === 'wholeString' && codeString.length < 6 ) {
        return false
    }
    let testCodeString = +codeString
    Number( testCodeString )
    return !isNaN( testCodeString )
}

export const charValidator = ( value, status, setStatus ) => {
    let charValidatorStatus = false
    let testCodeString = +value
    Number( testCodeString )

    if ( isNaN( testCodeString ) ) {
        charValidatorStatus = true
    }

    if ( charValidatorStatus ) {
        setStatus( {
            ...status,
            message: 'The value should be only a numbers',
            currentStatus: PROTECTION_FORM_STATUS_CONSTANTS.FAILURE
        } )

        return false
    }
}

export const chooseStatusTextClass = ( status ) => {
    if ( status.currentStatus === PROTECTION_FORM_STATUS_CONSTANTS.SUCCESS ) {
        return 'protection-form__status-text protection-form__status-text_green'
    }
    if ( status.currentStatus === PROTECTION_FORM_STATUS_CONSTANTS.PENDING ) {
        return 'protection-form__status-text protection-form__status-text_pending'
    }
    if ( status.currentStatus === PROTECTION_FORM_STATUS_CONSTANTS.FAILURE ) {
        return 'protection-form__status-text protection-form__status-text_red'
    }
}

export const onDataSending = ( codeString ) => {
    alert( `codeString is ${ codeString }` )
}
