import React, { useState } from 'react'

const  UseStateHookInput= () => {
    const [inputValue, setInputValue] = useState("")

    const InputChangeValue = (event)=>{
        setInputValue(event.target.value)
    }
  return (
    <div>
        {inputValue} <br />
        <input type="text" onChange={InputChangeValue}/>
    </div>
  )
}

export default UseStateHookInput