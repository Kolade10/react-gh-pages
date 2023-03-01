import React from "react";
import "./index.css";
import Star from "./images/Star.png";


export default function Card(props){
    let badgeText
    if (props.openSpot === 0){
        badgeText ="SOLD OUT"
    } else if (props.location === "online"){
        badgeText="ONLINE"
    }
    return(
        <div className="card-box">
            <div className="card">             
                <img className="card-pic" src={props.img} alt=""/>
                {badgeText && <p className="badge">{badgeText}</p>}

                <div className="card-text">
                    <div className="rating">
                        <img src={Star} alt=""/>
                        <p className="point">{props.rate}</p>
                        <p className="brac">({props.num})</p>
                        <p className="dot"></p>
                        <p className="country">{props.country}</p>
                    </div>
                    <p className="card-disc">{props.texts}</p>
                    <p className="card-price"><span className="bold">From {props.price}</span> / person</p>
                </div>
            </div>
        </div>
    )
}