import React , { useState } from 'react'

export default function UseStateDemo3() {

    // HOOK STATE <USESTATE ARRAY>

    const intialState = {username:"",password:""};
    const [account, setAccount] = useState(intialState);
    const [accountList, setAccountList] = useState([])

    return (
        <div> 
            {/* <p>#Debug {JSON.stringify(account)}</p> */}
            <p>#Debug {JSON.stringify(accountList)}</p>
            <form>
                <input type="text" 
                        placeholder="Username"
                        value={account.username}
                        onChange={event=>{
                            setAccount({...account, username: event.target.value})
                        }}/>
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
                        setAccountList([...accountList, {...account, index:accountList.length}])
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

            <ul>
                {accountList.map(item => 
                <li key={item.index}>Username:{item.username}, Password:{item.password}</li>)}
            </ul>
        </div>
    )
}
