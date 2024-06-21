import React from "react";

const ArrayReact = ()=>{
    const names=["yaswanth","subbu","srinu","sai","syam","subhani","naveen"]
    return(
        <div>
            {names.map((name,key)=>{
                return <h1 key={key}>{name}</h1>
            })}
        </div>
    )
}

export default ArrayReact