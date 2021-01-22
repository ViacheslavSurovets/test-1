import React from 'react'

import { ProtectionForm, LogoComponent, TableComponent } from '../components'
import './App.scss'

const App = () => (
  <div className='App'>
    <div className='App__logo'>
      <LogoComponent />
    </div>
    <div className='App__protection-form'>
      <ProtectionForm />
    </div>
    <TableComponent />
  </div>
)


export default App
