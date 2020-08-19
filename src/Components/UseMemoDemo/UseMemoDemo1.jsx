import React from 'react'

export default function UseMemoDemo1() {
    
    // USEMEMO 
    // ทำ Optimized ปรับปรุงประสิทธิภาพให้ดีขึ้น 
    // memo --> memory ทำ cache data

    const [count, setCount] = React.useState(0)
    
    return (
        <div>
            <button onClick={()=> setCount(prev => prev + 1)}>Increase</button>
            <button onClick={()=> setCount(0)}>Reset</button>
            <Content a={1} b={count}/>
        </div>
    )
}

const Content = ({a,b}) =>{
    const memorizedRandom = React.useMemo(()=>{
        return Math.random();
    }, [a]);

    // a only MemorizedRandom not change (นำข้อมูลที่มีใน cache มาแสดง)
    // a,b change too

    const random = Math.random();

    return(
        <div>

            <h1>A/B : {a}/{b}</h1>
            <h1>Random : {random}</h1>
            <h1>MemorizedRandom : {memorizedRandom}</h1>
        </div>
    )
}


