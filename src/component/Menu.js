import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import Login from './Login';
import { ReactSession }  from 'react-client-session';


function Menu(){
   
    ReactSession.setStoreType("localStorage");//設定Session
    if(ReactSession.get("cart")===undefined)
        ReactSession.set("cart", []);
    
    return(
        <>
            <ul className='mainmenu'>
                <li className='menuOptions'><a href='Home'>主頁</a></li>
                <li className='menuOptions'><a href='Cart'>購物車</a></li>
                <li className='menuOptions'><a href='Login'>登入</a></li>
            </ul>
            <hr/>
            <Routes>
                <Route path='Home'  element={<Home />}/>
                <Route path='Cart'  element={<Cart />}/>
                <Route path='Login' element={<Login />}/>
            </Routes>
            
        </>
    )
}

export default Menu;