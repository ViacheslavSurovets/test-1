import React, { forwardRef } from 'react'

import './input.styles.scss'

const InputComponent = forwardRef((props, ref) => (
	<input className="input-component" ref={ref} {...props} />
))

export default InputComponent
