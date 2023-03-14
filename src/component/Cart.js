import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css';
import { ReactSession }  from 'react-client-session';
import { Button } from 'react-bootstrap';


const Cart=()=>{
    
    const [cart,setCarts]=useState([]);
    

    useEffect(()=>{
        setCarts(ReactSession.get("cart"));
    },[setCarts])

    function deleteItem(index){
        setCarts(newcart=>newcart.filter((item,i) => i !== index));
    }

    function deleteCart(){
        setCarts([]);
        localStorage.clear("");//清空session
    }

    

    const CartList=()=>{
        const CartItemShow=cart.map((item,i)=>
            <tr key={i}>
                <td>{i+1}</td>
                <td>{item.itemName}</td>
                <td>{item.itemCount}</td>
                <td>{(item.itemCount*item.itemPrice)}元</td>
                <td><Button variant='danger' onClick={()=>deleteItem(i)}>移除</Button></td>
            </tr>
        )

        if(cart!==[]){
            return(<>
                <table>
                    <thead>
                        <tr>
                            <td>編號</td>
                            <td>產品名稱</td>
                            <td>數量</td>
                            <td>總金額</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {CartItemShow}
                    </tbody>
                </table>
            </>)
        }else{
            return(
                <h2>No items in Cart</h2>
            )
        }
    }

    
    
    
    return(
        <>
            <div className='cart'>
                <CartList/><br/>
                <Button variant='warning' onClick={deleteCart} className='btn deleteCart'>清空購物車</Button>
            </div>
            
        
        </>
    )
}

export default Cart;