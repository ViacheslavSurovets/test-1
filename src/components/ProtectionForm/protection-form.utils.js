import { PROTECTION_FORM_STATUS_CONSTANTS, PROTECTION_FORM_DEFAULT_CONSTANTS } from '../../constants'

const { FAILURE } = PROTECTION_FORM_STATUS_CONSTANTS
const { INPUTS_COUNT } = PROTECTION_FORM_DEFAULT_CONSTANTS

export const isCodeStringValid = (codeString, wholeString) => {
	if (wholeString && codeString.length < INPUTS_COUNT) {
		return false
	}
	const testCodeString = +codeString
	Number(testCodeString)
	return !Number.isNaN(testCodeString)
}

export const charValidator = (value, status, setStatus) => {
	let charValidatorStatus = false
	const testCodeString = +value
	Number(testCodeString)

	if (Number.isNaN(testCodeString)) {
		charValidatorStatus = true
	}

	if (charValidatorStatus) {
		setStatus({
			...status,
			message: 'The value should be only a numbers',
			currentStatus: FAILURE,
		})
		return false
	}

	return charValidatorStatus
}

// TODO change name
export const authenticate = (codeString, history) => {
	window.localStorage.setItem('test', codeString)
	history.push('/')
}
