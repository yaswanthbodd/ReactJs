import React from 'react'

const PropsExample=()=>{
    return(
        <div>
            <User name="yaswanth" age={21} email="boddu09@gmail.com" />
            <User name="sai" age={20} email="sai@gmail.com" />
        </div>
    )
}

const User = (props) =>{
    return(
        <div>
            <h1>{props.name}</h1>
            <h3>{props.age}</h3>
            <h3>{props.email}</h3>
        </div>
    )
}

export default PropsExample