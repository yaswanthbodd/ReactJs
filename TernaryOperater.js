import React from 'react'

const TernaryOperater=()=>{
    const age=18
    const isGreen=true
    return(
        <div>
            {age>=18? <h1>Your are Eligeble</h1> : <h1>Your not eligible</h1>}
            <h1 style={{color : isGreen ? "green" : "Red"}}>This is Color checking or not</h1>
        </div>
    )
}

export default TernaryOperater