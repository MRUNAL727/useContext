
import React, {useContext} from 'react'
import {ColorContext} from './App'
const Context = () => {

  let col = useContext(ColorContext);
  
  return (
    <div style={{color:col}}>Paragraph</div>
  )
}

export default Context