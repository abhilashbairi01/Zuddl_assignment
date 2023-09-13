import React from "react";
import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faBars,
  faPaperclip,
  faFileCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import drone from "../Assets/drone.png";
function Todo() {
  return (
    <div id="Todo-card">
      <div id="title">
        <p>Todo</p>
        <p style={{ marginRight: "2%" }}>
          <FontAwesomeIcon icon={faEllipsis} />
        </p>
      </div>
      <div id="card_todo">
        
        <hr id="line"/>
        <p style={{ marginLeft: "2%" }}>
          Build A Better Burrito: & Layers To Success
        </p>
        <div className="cardRow">
          <p style={{ marginLeft: "2%" }}>
            <FontAwesomeIcon icon={faBars} />
          </p>
          <p>
            <FontAwesomeIcon icon={faFileCircleCheck} />
          </p>
          <p>0/7</p>
        </div>
      </div>
      <div id="card1">
      <hr id="line1"/>
        <p style={{ marginLeft: "2%" }}>
          Nacho Ordinary Birthday-Event Space Rentals
        </p>
        <div className="cardRow">
          <p style={{ marginLeft: "2%" }}>
            <FontAwesomeIcon icon={faBars} />
          </p>
          {/* <p><FontAwesomeIcon icon={faPaperclip}/></p> */}
          {/* <p>2</p> */}
        </div>
      </div>
      <br/>
      <div style={{ backgroundColor: "green" }} id="image_card">
        <img
          className="hidebg"
          src={drone}
          width={"50%"}
          height={"13%"}
          alt="load"
        />
      </div>
      <div id="card2">
        <p style={{ marginLeft: "2%" }}>Taco Drone Delivery Service</p>
        <div className="cardRow">
          <p style={{ marginLeft: "2%" }}>
            <FontAwesomeIcon icon={faBars} />
          </p>
          <p>Nov 10</p>
          <p>
            <FontAwesomeIcon icon={faPaperclip} />
          </p>
          <p>3</p>
        </div>
      </div>
      <div id="card3">
        <p style={{ marginLeft: "2%" }}>Superbowl Ad-"Super Salad Bowls"</p>
        <div className="cardRow">
          <p style={{ marginLeft: "2%" }}>
            <FontAwesomeIcon icon={faBars} />
          </p>
          <p>Dec 12</p>
          <p>
            <FontAwesomeIcon icon={faPaperclip} />
          </p>
          <p>3</p>
        </div>
      </div>
      <div style={{ marginLeft: "2%", textAlign: "left", color: "lightcyan" }}>
        Add a Card...
      </div>
    </div>
  );
}

export default Todo;
