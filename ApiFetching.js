import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const ApiFetching = () => {
  // fetch("https://catfact.ninja/fact")
  // .then((res)=>res.json())
  // .then((data)=>{
  //   console.log(data)
  // })

  const [showText,setShowText] = useState("")

  const fetchCatFact = ()=>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{
      setShowText(res.data.fact);
    })
  }
  useEffect(()=>{
    fetchCatFact()
  },[])
  
  return (
    <div>
        <button onClick={fetchCatFact}>Generate Cat Fact</button>
        <p>{showText}</p>
    </div>
  )
}

export default ApiFetching