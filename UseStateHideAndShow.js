import React,{useState} from 'react'

const UseStateHideAndShow = () => {
    const [showText,setShowText]=useState(true)
  return (
    <div>
        <button onClick={ ()=> { setShowText(!showText)}}>show/Hide</button>
        {showText && <h1>My name is yaswanth</h1>}

        <UseStateColorChanger />
    </div>
  )
}

const UseStateColorChanger = ()=>{
    const [textColor,setTextColor]= useState("black")

    return(
        <div>
            <button onClick={()=>{
                setTextColor(textColor === "black" ? "red" : "black")
            }}>Change Color</button>
            <h1 style={{color:textColor}}>Hi My name is yaswanth</h1>
            
        </div>
    )
}

export default UseStateHideAndShow