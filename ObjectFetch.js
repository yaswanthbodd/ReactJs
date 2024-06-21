import React from "react";

const ObjectFetch = ()=>{
    const users=[
        {name:'yaswanth',age:21},
        {name:'subbu',age:20},
        {name:'srinu',age:20}
    ]
    return(
        <div>
            {users.map((user)=>{
                return(
                    <User name={user.name} age={user.age}/>

                )
            })}
        </div>
    )
}

const User=(props)=>{
    return(
        <div>
            <h1>{props.name}</h1>
            <h3>{props.age}</h3>
        </div>
    )
}

export default ObjectFetch