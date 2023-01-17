import React,{useState,useEffect} from "react";
import StarRatings from "react-star-ratings";
export function Table(){
    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/demo.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return(
        <>
        {products.map((value,index)=>(
            <>
            <h1>{value.name}</h1>
            
            <table class="table table-striped container">
            <thead>
                <tr>
                <th scope="col">JOB ROLL</th>
                <th scope="col">Communication</th>
                <th scope="col">Aptitude</th>
                <th scope="col">UI Designing Skill</th>
                <th scope="col">Logical Skill</th>
                <th scope="col">Framework</th>
                <th scope="col">Database Skill</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                
                    <td>Front-End Developer</td>
                    <td><StarRatings rating={value.Communication} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                    <td><StarRatings rating={value.Aptitude} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                    <td><StarRatings rating={value.UI_Designing_Skill} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                    <td>NA</td>
                    <td><StarRatings rating={value.Framework} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                    <td>NA</td>
                </tr>
                <tr>
                
                <td>Web Application Developer</td>
                <td><StarRatings rating={value.Communication} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                <td><StarRatings rating={value.Aptitude} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                <td><StarRatings rating={value.UI_Designing_Skill} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                <td><StarRatings rating={value.Logical_Skill} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                <td><StarRatings rating={value.Framework} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                <td>NA</td>
            </tr>
            <tr>
                
                <td>Software Developer</td>
                <td><StarRatings rating={value.Communication} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                <td><StarRatings rating={value.Aptitude} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                <td><StarRatings rating={value.UI_Designing_Skill} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                <td><StarRatings rating={value.Logical_Skill} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                <td><StarRatings rating={value.Framework} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                <td><StarRatings rating={value.Database_Skill} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
            </tr>
            <tr>
                
                <td>Back-End Developer</td>
                <td><StarRatings rating={value.Communication} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                <td><StarRatings rating={value.Aptitude} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                <td>NA</td>
                <td><StarRatings rating={value.Logical_Skill} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                <td><StarRatings rating={value.Framework} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                <td><StarRatings rating={value.Database_Skill} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
            </tr>
            <tr>
                
                <td>Data Developer</td>
                <td><StarRatings rating={value.Communication} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                <td><StarRatings rating={value.Aptitude} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                <td>NA</td>
                <td><StarRatings rating={value.Logical_Skill} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                <td>NA</td>
                <td><StarRatings rating={value.Database_Skill} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
            </tr>
            <tr>
                
                <td>Full-stack Developer</td>
                <td><StarRatings rating={value.Communication} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                <td><StarRatings rating={value.Aptitude} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                <td><StarRatings rating={value.UI_Designing_Skill} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                <td><StarRatings rating={value.Logical_Skill} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                <td><StarRatings rating={value.Framework} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
                <td><StarRatings rating={value.Database_Skill} starDimension="22px" starSpacing="2px" starRatedColor="gold"/></td>
            </tr>
                
            </tbody>
        </table>
        </>
        ))}
    </>
    );
}