import React , { useState } from 'react'

export default function UseStateDemo1() {

  // HOOK STATE <USESTATE>
  // *state เมื่อถูกทำให้เปลี่ยนแปลง เมื่อได้รับมาจะมีการเปลี่ยนแปลงค่าไปด้วย
  // useState 
  
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState("")

  return (
    <div style={{textAlign:"center"}}>
      <button 
        onClick={()=>{
          setCount(count+1);
          setTitle("React Hook")
          }}>ADD</button>
      UseState : {count}
      <br/>
      Title : {title}
    </div>
  )
}