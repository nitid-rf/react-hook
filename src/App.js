import React , {useState} from 'react'
import UseStateDemo1 from './Components/UseStateDemo/UseStateDemo1'
import UseStateDemo2 from './Components/UseStateDemo/UseStateDemo2'
import UseStateDemo3 from "./Components/UseStateDemo/UseStateDemo3";
import UseEffectDemo1 from "./Components/UseEffectDemo/UseEffectDemo1";
import UseEffectDemo2 from "./Components/UseEffectDemo/UseEffectDemo2";
import UseEffectDemo3 from "./Components/UseEffectDemo/UseEffectDemo3";
import UseEffectDemo4 from './Components/UseEffectDemo/UseEffectDemo4';
import UseContextDemo1 from "./Components/UseContextDemo/UseContextDemo1";
import UseMemoDemo1 from "./Components/UseMemoDemo/UseMemoDemo1";
import UseCallbackDemo1 from "./Components/UseCallbackDemo/UseCallbackDemo1";


export default function App() {

  //UseEffectDemo2
  const [isShow, setIsShow] = useState(true)

  return (
    <div style={{textAlign:"center"}}>

    <h1>UseStateDemo1</h1>
     <UseStateDemo1 /> 

    <h1>UseStateDemo2</h1>
     <UseStateDemo2 />

     <h1>UseStateDemo3</h1>
     <UseStateDemo3 />

     <h1>UseEffectDemo1</h1>
     <UseEffectDemo1 />

     <h1>UseEffectDemo2</h1>
     {isShow && <UseEffectDemo2 />}
     <button onClick={()=>setIsShow(false)}>Hide</button>

     <h1>UseEffectDemo3</h1>
     < UseEffectDemo3/>

     <h1>UseEffectDemo4</h1>
     < UseEffectDemo4/>

     <h1>UseContextDemo1</h1>
     <UseContextDemo1 />

     <h1>UseMemoDemo1</h1>
     <UseMemoDemo1/>

     <h1>UseCallbackDemo1</h1>
     <UseCallbackDemo1 />

    </div>
  )
}