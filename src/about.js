import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

export default function About(){
    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return(
        <>
            {products.map((value,index)=>(
                <div>
                    <ul>
                        <li>{value.title}</li>
                        <li>{value.id}</li>
                        <Link to={`/details/${value.id}`}><li><a className="btn btn-primary">View More....</a></li></Link>
                    </ul>
                  
                </div>
            ))} 
        </>
    );
}