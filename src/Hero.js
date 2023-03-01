import React from "react";
import "./index.css"
import Cooking from "./images/cooking.png";
import Cookies from "./images/cookies.png";
import Acrobat from "./images/acrobat.png";
import Meal from "./images/meal.png";
import Guiter from "./images/guiter.png";
import Keyboard from "./images/keyboard.png";
import Swimming from "./images/swimming.png";
import Yoga from "./images/yoga.png";
import Singer from "./images/singer.png";


export default function Hero(){
    return(
        <div className="pic-g">
            <div className="box-1">
            <img className="pic" src={Cooking} alt=""/>
            </div>
            <div className="box-2">
                <img className="pic" src={Cookies} alt=""/>
                <img className="pic" src={Acrobat} alt=""/>
            </div>
            <div className="box-3">
                <img className="pic" src={Meal} alt=""/>
                <img className="pic" src={Guiter} alt=""/>
            </div>
            <div className="box-4">
                <img className="pic" src={Keyboard} alt=""/>
                <img className="pic" src={Swimming} alt=""/>
            </div>
            <div className="box-5">
                <img className="pic" src={Yoga} alt=""/>
                <img className="pic" src={Singer} alt=""/>
            </div>
        </div>
    )
}