import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Cards"
import Exp from "./Exp";
import expdata from "./expdata";

import "./index.css"


export default function App(){
    const expElements = expdata.map(card => {
      return <Card 

        key={card.id}
        {...card}
        />
  })
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Exp/>
     <div className="cardss">
      {expElements}
    
      
     </div>
    </div>
  )
}