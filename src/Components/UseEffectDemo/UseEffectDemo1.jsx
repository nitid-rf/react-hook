import React, { useState,useEffect } from 'react'

export default function UseEffectDemo1() {

// USEEFFECT EFFECT and INPUT 

    // useEffect(() => {
    //     effect
    //     {/* effect - Called whenever state is Changed 
    //             code ที่ต้องการให้ run ทุกครั้งที่ component มีการใช้ useEffect */}
    //     return () => {
    //         cleanup
    //     {/* cleanup **ถ้ายังไม่ต้อการดักให้ลบก่อนได้
    //             code ที่ต้องการ return รวมถึง clear value ที่ component ถูกทำลาย 
    //             หรือ clear value ของ useEffect ครั้งก่อน เพื่อที่จะทำ useEffect ครั้งต่อไป*/}
    //     }
    // }, [input]  
    // )
    //     {/* [input]
    //          เป็น condition โดยเป็นการกำหนดว่าจะทำการดัก state ตัวไหน */}


    const [count, setCount] = useState(0)

    useEffect(() => {
        // Called whenever state is Changed 
        document.title = "Current count : " + count
    }, [count])
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Add</button>
        </div>
    )
}
