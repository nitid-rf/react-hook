import React , { useState } from 'react'

export default function UseStateDemo2() {

    // HOOK STATE <USESTATE OBJECT>

    const intialState = {username:"",password:""};
    const [account, setAccount] = useState(intialState);

    return (
        <div> 
            <p>#Debug {JSON.stringify(account)}</p>
            <form>
                <input type="text" 
                        placeholder="Username"
                        value={account.username}
                        onChange={event=>{
                            setAccount({...account, username: event.target.value})
                        }}/>
                        {/* Spread Operator (...) หรือ Three-dot expression 
                        ช่วยในการกระจาย (Spread) สมาชิกใน Array/Object/String 
                        ไปสู่ Element หรือ ตัวแปรเป้าหมายที่เราต้องการได้ */}

                        {/* ...account 
                        หมายถึง account มี Object อะไรบ้าง (โดยในที่นี้คือ username,password) 
                        ซึ่งจะทำการถอด(กระจาย)ทั้งหมด จะได้ username,password ออกมา
                        ดังนั้นจึงสามารถทำ Overwirte(เขียนทับ) ได้ 
                        ผ่านการกำหนดค่าไว้ทางด้านขวา => username: event.target.value 
                        โดยจะนำค่า username ที่ได้มา นำไปแทนที่ค่าของ username ที่อยู่ใน account ที่มีอยู่
                        ซึ่ง field อื่นๆ ก็จะไม่มีการเปลี่ยนแปลง ยังคง state เดิมที่เป็นอยู่ก่อนหน้า
                        */}
                <br />
                <input type="text" 
                        placeholder="Password"
                        value={account.password}
                        onChange={event=>{
                            setAccount({...account, password: event.target.value})
                        }}/>
                <br />
                <button
                    onClick={event => {
                        event.preventDefault();
                        alert(JSON.stringify(account));
                    }}
                >
                    Submit
                </button>
                <button
                    onClick={event => {
                        event.preventDefault();
                        setAccount(intialState);
                    }}
                >
                    Clear
                </button>

            </form>
        </div>
    )
}
