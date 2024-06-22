import React from 'react'
import { useEffect,useState } from 'react'
import Axios from 'axios'

const ApiFetching2 = () => {
    const [name,setName] = useState("")
    const [predictedAge,setPredictedAge] = useState(0)
    const fetchData = ()=>{
        Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
            setPredictedAge(res.data.age)
        })
    };
  return (
    <div>
        <input placeholder='Enter your name..' onChange={(event)=>{ setName(event.target.value)}}/>
        <button onClick={fetchData}>Predict Age</button>
        <h1>Predicted Age: {predictedAge}</h1>
    </div>
  )
}

export default ApiFetching2