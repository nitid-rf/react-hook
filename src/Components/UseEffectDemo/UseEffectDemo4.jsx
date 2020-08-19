import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function UseEffectDemo4() {

    // USEEFFECT feedJSON with Axios
    // ใช้ useEffect fetch data จาก json file

    const [dataArray, setDataArray] = useState(null)

    useEffect(() => {
        axios.get("http://jsonplaceholder.typicode.com/posts").then(result =>{
            
        const {data} = result
            console.log(data);
            // alert(JSON.stringify(data))
            setDataArray(data)
        })
        return () => {
            
        }
    }, [])

    return (
        <div>
            {/* <p>#Debug {JSON.stringify(dataArray)}</p> */}
            <ul>
                {dataArray && dataArray.map(item =>
                    <li key={item.id}>
                        {item.id}. {item.title}
                    </li>
                )}
                
            </ul>
        </div>
    )
}
