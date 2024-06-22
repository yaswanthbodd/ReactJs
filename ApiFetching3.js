import React from "react";
import Axios from 'axios'
import { useEffect,useState} from "react";

const ApiFetching3 = ()=>{
    const [name,setName] = useState("")
    const [predictedAge,setPredictedAge] = useState(null)

    const fetchData = ()=>{
        Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
            setPredictedAge(res.data)
        })
    }

    return(
        <div>
            <input placeholder="Enter Your Name.." onChange={(event)=>{
                setName(event.target.value)
            }}/>
            <button onClick={fetchData}>Predicted Age</button>

            <h1>Name: {predictedAge?.name}</h1>
            <h1>Predicted Age: {predictedAge?.age}</h1>
            <h2>Count: {predictedAge?.count}</h2>
        </div>
    )
}

export default ApiFetching3