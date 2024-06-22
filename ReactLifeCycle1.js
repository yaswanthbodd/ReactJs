import React, { useState } from 'react'
import Text from './Text'

const ReactLifeCycle1 = () => {
    const [showText,setShowText] = useState(false)
  return (
    <div>
        <button onClick={()=>{
            setShowText(!showText)
        }}>show Text</button>
        {showText && <Text />}
    </div>
  )
}

export default ReactLifeCycle1