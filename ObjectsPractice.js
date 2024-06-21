import React from "react";

const ObjectsPractice =()=>{
    const planets = [
        {name:"Mars", isGasPlanet: false},
        {name:"Earth",isGasPlanet:false},
        {name:"Jupiter",isGasPlanet:true},
        {name:"Venus",isGasPlanet:false},
        {name:"Neptune",isGasPlanet:true},
        {name:"Uranus",isGasPlanet:true}
    ]
    return(
        <div>
            {planets.map((planet)=>{
                return(
                <Planet name={planet.name} isGasPlanet={planet.isGasPlanet} />
            )})}
        </div>
    )
}

const Planet=(props)=>{
    return(
        props.isGasPlanet ? <div><h1>{props.name}</h1> <h3>{props.isGasPlanet}</h3></div> : <h1></h1>
    )
}

export default ObjectsPractice