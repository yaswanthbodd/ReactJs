import React, { useState } from 'react'

const Text = () => {
    const [text,setText] = useState("")
  return (
    <div>
        <input onChange={(event)=>{
            setText(event.target.value)
        }}
        type='password'/>
        {text}
    </div>
  )
}

export default Text