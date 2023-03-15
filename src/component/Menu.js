import React,{useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import Login from './Login';
import { ReactSession }  from 'react-client-session';
import Logout from './Logout';


function Menu(){

    const [checkLogin,setCheckLogin]=useState(false);//檢查登入狀況
    //const [User,setUser]=useState("");
    const [isLogin,setIsLogin]=useState();

    useEffect(()=>{
        ReactSession.setStoreType("localStorage");//設定Session
        if(ReactSession.get("cart")===undefined)
            ReactSession.set("cart", []);
        if(ReactSession.get("Login")===true){
            setCheckLogin(true);
            setIsLogin("您好，"+ReactSession.get("User"));
        }
        if(ReactSession.get("Login")===false){
            setIsLogin("你尚未登入，請先登入!");
            setCheckLogin(false);
            //window.location.href='http://localhost:3000/Login';
        }
            
    },[setCheckLogin])
   
    
    
    
    return(
        <>
            <ul className='mainmenu'>
                <li className='menuOptions' style={{display:(!checkLogin ? 'none': 'block')}}><a href='Home'>主頁</a></li>
                <li className='menuOptions' style={{display:(!checkLogin ? 'none': 'block')}}><a href='Cart'>購物車</a></li>
                <li className='menuOptions' style={{display:(checkLogin ? 'none': 'block')}}><a href='Login'>登入</a></li>
                <li className='menuOptions' style={{display:(!checkLogin ? 'none': 'block')}}><a href='Logout'>登出</a></li>
                <li className='labelOnly'><label>{isLogin}</label></li>
            </ul>
            <hr/>
            <Routes>
                <Route path='Home'  element={<Home />}/>
                <Route path='Cart'  element={<Cart />}/>
                <Route path='Login' element={<Login />}/>
                <Route path='Logout' element={<Logout />}/>
            </Routes>
            
        </>
    )
}

export default Menu;