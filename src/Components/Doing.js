import React from "react";
import "./Doing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faBars,
  faPaperclip,
  faFileCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import eat from "../Assets/eat.png";
function Doing() {
  return (
    <div id="Todo-card">
      <div id="title">
        <p>Doing</p>
        <p style={{ marginRight: "2%" }}>
          <FontAwesomeIcon icon={faEllipsis} />
        </p>
      </div>
      <div id="card_todo">
        {/* <hr id="line"/> */}
        <p style={{ marginLeft: "2%" }}>The Taco Truck World Tour</p>
        <div className="cardRow">
          <p>Oct 5</p>
          <p>
            <FontAwesomeIcon icon={faBars} />
          </p>
        </div>
      </div>
      <br/>
      <div style={{ backgroundColor: "tomato" }} id="image_card">
        <img
          className="hidebg"
          src={eat}
          width={"50%"}
          height={"13%"}
          alt="load"
        />
      </div>
      <div id="card1">
        <hr id="line1" />
        <p style={{ marginLeft: "2%" }}>
       Opeartion "Awesome Sauce"-A Recipe For Profit
        </p>
        <div className="cardRow">
        <p>Oct 18</p>
          <p style={{ marginLeft: "2%" }}>
            <FontAwesomeIcon icon={faBars} />
          </p>
           <p><FontAwesomeIcon icon={faPaperclip}/></p> 
           <p>3</p> 
           <p>
            <FontAwesomeIcon icon={faFileCircleCheck} />
          </p>
          <p>2/5</p>
        </div>
      </div>
  
      
      <div id="card2">
        <p style={{ marginLeft: "2%" }}>#NoFiller Instagram Campaign</p>
        <div className="cardRow">
          
          <p>
            <FontAwesomeIcon icon={faPaperclip} />
          </p>
          <p>3</p>
        </div>
      </div>
      <div id="card3">
        <p style={{ marginLeft: "2%" }}>Global Franchise Oppurtunities</p>
        <div className="cardRow">
          <p style={{ marginLeft: "2%" }}>
            <FontAwesomeIcon icon={faBars} />
          </p>
          <p>
            <FontAwesomeIcon icon={faFileCircleCheck} />
          </p>
          <p>4/9</p>
        </div>
      </div>
      <div style={{ marginLeft: "2%", textAlign: "left", color: "lightcyan" }}>
        Add a Card...
      </div>
    </div>
  );
}

export default Doing;
