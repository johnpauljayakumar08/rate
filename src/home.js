import React,{useState} from "react";

import { Menu } from "./menu";

export default function Home() {
    // const [variable,setVariable]=useState(value)
    const [increment,setIncrement]=useState(0)
    const [check,setCheck]=useState(new Date())
    function decre(){
        setIncrement(increment-1)
    }
 
   function datee(){
     var startDate=document.getElementById("date").value;
     
     check.setDate(check.getDate(startDate)+9)
     
   }
    return (
        <div>
            <Menu/>
            <h1>{setIncrement}</h1>
            <button onClick={()=>setIncrement(increment+1)}>increment</button>
            <input type='button' onClick={decre} value="decrement"/>
            <button onClick={()=>setIncrement(increment*0)}>reset</button>
            <div className='col-lg-12'>
                
            </div>
            <input type="date" id="date"/>
            <input type="button" value="submit" onClick={datee}/>
            <h1>{check}</h1>
        </div>
    );
}