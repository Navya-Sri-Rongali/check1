import React from 'react'
import ButtonAppBar from './ButtonAppBar'
import Menu1 from './Menu1'
import MenuPopupState from './MenuPopupState'
import './Assessment.css'
function Assessment() {
  return (
    <center>
    <div >
        <ButtonAppBar/>
        <div className='total'>
        <span className='first'>
            <MenuPopupState/>
        </span>
        <span className='second'><Menu1/></span>
        </div>
    </div>
    </center>
  )
}

export default Assessment