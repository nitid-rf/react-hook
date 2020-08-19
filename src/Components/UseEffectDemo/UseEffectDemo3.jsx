import React, {useState , useEffect} from 'react'

export default function UseEffectDemo3() {

    // USEEFFECT with SetInterval

    const [count, setCount] = useState(0)

    const doSomeThing = () => {

        // จะทำการ set count +1 ==> value 1
        // setCount(count + 1) 

        // จะทำการ set count ผ่าน function countPrev 
        // โดยจะทำทุกๆครั้ง --> 1 - 2 - 3 - 4 ...
        setCount(countPrev => countPrev + 1) 
        
        console.log("Do Some Thing");
    }

    useEffect(() => {
        // ทำ function doSomeThing โดยจะเรียกทุกๆ 1 วินาที
        const intervalId = setInterval(doSomeThing,1000)

        //Cleanup
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}
