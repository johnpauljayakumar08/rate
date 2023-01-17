import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";

export default function Details(){
    const [products,setProducts]=useState([])
    const {id}=useParams() 
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+id)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return(
        <>
        <h1>{products.title}</h1>
        <p>{products.description}</p>
        </>
    );
}