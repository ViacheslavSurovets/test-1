import React from 'react'

import './buttons-container.styles.scss'

const ButtonsContainerComponent = ( { onDataSending, isValid } ) =>
        <div className='buttons-container'>
            <button onClick={ onDataSending } disabled={!isValid()} className="buttons-container__button buttons-container__button_big">Submit
            </button>
            <button className="buttons-container__button buttons-container__button_small">Resend Code</button>
        </div>



export default ButtonsContainerComponent
