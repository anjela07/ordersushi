import React, { useState } from "react";
 import "./basket.css"
export const Basket =({con})=>{
    const[count,setCount]=useState(0)
    const[price,setPrice]=useState(con.mon)
 const plus=()=>{
    setCount((count)=>count+1)
    setPrice((price)=>price+con.mon)
 }
 const minus=()=>{
    setCount((count)=>count-1)
    setPrice((price)=>price-con.mon)
 }
    return(
        <div className="container">
            <div className="set">
                <img src={con.img} alt="" />
                <h2>{con.title}</h2>
                <span>{con.use}</span>
            </div>
            <div className="second">
                <h3>price:{price}$</h3>
                <div className="count">
                    <button className="btn" onClick={plus}>+</button>
                    <p>{count}</p>
                    <button className="btn" onClick={minus}>-</button>
                    <br />
                </div>
            </div>
        </div>
    )
}
