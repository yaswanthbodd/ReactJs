import React from 'react'
import { useEffect,useState } from 'react'
import Axios from 'axios'

const ApiFetchingPratice = ()=>{
    const [generatedExcuse,setGeneratedExcuse] = useState("")
    const fetchExcuse=(excuse)=>{
        Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((res)=>{
            setGeneratedExcuse(res.data[0].excuse) // 0 because of array given the api
        })
    }
    return(
        <div>
            <h1>Generate An Excuse</h1>
        <button onClick={()=> fetchExcuse("party")}>Party</button>
        <button onClick={()=> fetchExcuse("family")}>Family</button>
        <button onClick={()=>fetchExcuse("office")}>Office</button> 
        <p>{generatedExcuse}</p>
        </div>
    )
}

export default ApiFetchingPratice