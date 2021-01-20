import React from 'react'

import './checkbox.styles.scss'

const CheckboxComponent = ( { ...rest } ) => (
    <div className='checkbox-container'>
        <input className='checkbox-container__input' type="checkbox" { ...rest } id="checkbox-id"/>
        <label className='checkbox-container__label' htmlFor="checkbox-id">
            <span>Remember this device</span>
        </label>
    </div>


)

export default CheckboxComponent
