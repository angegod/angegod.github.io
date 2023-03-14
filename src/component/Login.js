import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Login.css';
import { ReactSession }  from 'react-client-session';
import { Button } from 'react-bootstrap';

const Login=()=>{
    const [account,setAccount]=useState();
    const [password,setPassword]=useState();

    function LoginProcess(){

    }

    return(
        <>
            <div className='LoginForm'>
                <div className='account'>
                    <label>帳號:</label>
                    <input type='text' name='account' onChange={e=>setAccount(e.target.value)}/>
                </div>
                <div className='password'>
                    <label>密碼:</label>
                    <input type='password' name='password' onChange={e=>setPassword(e.target.value)}/>
                </div>
                <div className='LoginBtn'>
                    <Button variant='primary' onClick={LoginProcess}>登入</Button>
                </div>
            </div>
        </>
    )


}

export default Login;