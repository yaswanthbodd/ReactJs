import React, { useState } from "react";

const UseStateHook=()=>{
    const [age,setAge] = useState(0)

    const Increase = ()=>{
        setAge(age+1)
    }
    const Decrease = ()=>{
        setAge(age-1)
    }
    return(
        <div>
            {age}
            <button onClick={Increase}>Increase</button>
            <button onClick={Decrease}>Increase</button>
        </div>
    )
}

export default UseStateHook