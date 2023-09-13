import React from 'react'
import './Done.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faBars,
  faPaperclip,
  faFileCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import eat from "../Assets/eat.png";
function Done() {
  return (
    <div id="Todo-card">
    <div id="title">
      <p>Done</p>
      <p style={{ marginRight: "2%" }}>
        <FontAwesomeIcon icon={faEllipsis} />
      </p>
    </div>
    <div id="card_todo">
      {/* <hr id="line"/> */}
      <p style={{ marginLeft: "2%" }}>Focus Group :Corn vs.Flour Tortillas</p>
      <div className="cardRow">
       
        <p>
          <FontAwesomeIcon icon={faBars} />
        </p>
      </div>
    </div>
    <br/>
   
    <div id="card1">
     
      <p style={{ marginLeft: "2%" }}>
        New Swag: Socks,Scarves & Salsa
      </p>
      <div className="cardRow">
      
         <p><FontAwesomeIcon icon={faPaperclip}/></p> 
         <p>5</p> 
         
      </div>
    </div>

    
    <div id="card2">
    <hr id="line1" />
      <p style={{ marginLeft: "2%" }}>Eco friendly Utensils & Napkins</p>
      <div className="cardRow">
        
      <p>
          <FontAwesomeIcon icon={faFileCircleCheck} />
        </p>
        <p>3/3</p>
      </div>
    </div>
    <div id="card3">
      <p style={{ marginLeft: "2%" }}>Update Yelp Listing</p>
      <div className="cardRow">
        <p style={{ marginLeft: "2%" }}>
          <FontAwesomeIcon icon={faBars} />
        </p>
        <p><FontAwesomeIcon icon={faPaperclip}/></p> 
         <p>1</p> 
      </div>
    </div>
    <div style={{ marginLeft: "2%", textAlign: "left", color: "lightcyan" }}>
      Add a Card...
    </div>
  </div>
  )
}

export default Done