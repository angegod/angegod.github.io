import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


function TestComponent(){
    const [cartTable,setCartTable]=useState([]);
    const [changeCount,setChangeCount]=useState(0);

    useEffect(()=>{

        if(cartTable.length===0){
            var jsonarray=[{itemId:1,itemName:'蘋果',itemCount:3,itemPrice:20,itemTotal:60},
                {itemId:2,itemName:'香蕉',itemCount:4,itemPrice:50,itemTotal:200},
                {itemId:3,itemName:'西瓜',itemCount:8,itemPrice:30,itemTotal:240} ];

            setCartTable(jsonarray);
        }
    },[cartTable])

    function TableShow(){
       const list=cartTable.map((item,i)=>
            
            <tr key={i}>
                <td>{item.itemId}</td>
                <td>{item.itemName}</td>
                <td>{item.itemCount}</td>
                <td>{item.itemTotal}</td>
            </tr>
            
       )
       return(<>{list}</>)
        
    }

    function CountChanges(){
        var oldcart=[...cartTable];
        oldcart[0].itemCount=changeCount;
        setCartTable(oldcart);
        console.log(cartTable);
    }

    return(
        <>
            <div className='table'>
                <table>
                    <thead>
                        <tr>
                            <td>編號</td><td>產品名稱</td><td>數量</td><td>總金額</td>
                        </tr>
                    </thead>
                    <tbody>
                        <TableShow/>
                    </tbody>
                </table>
                
            </div>
            <div className='input'>
                <input type='number' onChange={(e)=>setChangeCount(e.target.value)}/>
                <Button variant='danger' onClick={CountChanges}>更改</Button>  
            </div>
            
        </>

    )
}

export default TestComponent; 