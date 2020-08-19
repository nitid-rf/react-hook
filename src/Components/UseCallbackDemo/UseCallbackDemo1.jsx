import React from 'react'

export default function UseCallbackDemo1() {
    
    // USECALLBACK 
    // ทำ Optimized ปรับปรุงประสิทธิภาพให้ดีขึ้น 
    // คล้าย usememo --> cache value data (return inner function)
    // แต่ usecallback --> cache function

    const [count, setCount] = React.useState(0)
    
    return (
        <div>
            <button onClick={()=> setCount(prev => prev + 1)}>Increase</button>
            <button onClick={()=> setCount(0)}>Reset</button>
            <Content id={count}/>
        </div>
    )
}

const Content = ({id}) =>{
    console.log("Re-render");

    const handleClick = React.useCallback(()=>{
        console.log("Click");
    }, []);


    return(
        <div>
            <h1>Use CallBack Demo</h1>
            <button onClick={handleClick}>Test</button>
        </div>
    )
}


