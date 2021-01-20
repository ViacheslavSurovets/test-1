import React from 'react'

import './logo.styles.scss'
import { logo } from '../../assets'


const LogoComponent = ( {marginTop} ) => (
    <figure className="logo" >
        <img src={ logo } alt="Logo" className="logo__image"/>
    </figure>
)

export default LogoComponent
