import React from 'react'

import './input.styles.scss'

const InputComponent = ({ ...rest }) => (
  <input className='input-component' {...rest} />
)

export default InputComponent
