import React,{useState,useRef} from 'react'

export default function Apps() {
    const [input,setInput]=useState("");
    const inpute1=useRef(null);

   const onButtonClick=()=>{
        inpute1.current.focus()
    }

    return (
        <div>
            <input ref={inpute1} type="text" />
            <button onClick={onButtonClick}>Focus</button>
        </div>
    )
}
