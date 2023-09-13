import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faBars,faPaperclip } from "@fortawesome/free-solid-svg-icons";
import circle from "../Assets/load.png";
import "./Main.css";

function Resources() {
  return (
    <div id="Resource-card">
      <div id="title">
        <p>Resources</p>
        <p style={{marginRight:"2%"}}><FontAwesomeIcon icon={faEllipsis} /></p>
      </div>
      <div style={{ backgroundColor: "blue" }} id="image_card">
        <img
          className="hidebg"
          src={circle}
          width={"50%"}
          height={"13%"}
          alt="load"
        />
      </div>
      <div id="card">
        <p style={{marginLeft:'2%'}}>Financial and Growth Data</p>
        <div className="cardRow">
          <p style={{marginLeft:'2%'}}><FontAwesomeIcon icon={faBars}/></p>
          <p><FontAwesomeIcon icon={faPaperclip}/></p>
          <p>5</p>
        </div>
      </div>
      <div id="card1">
        <p style={{marginLeft:'2%'}}>2017 Goals And KPIs </p>
        <div className="cardRow">
          <p style={{marginLeft:'2%'}}><FontAwesomeIcon icon={faBars}/></p>
          <p><FontAwesomeIcon icon={faPaperclip}/></p>
          <p>2</p>
        </div>
      </div>
      <div id="card2">
        <p style={{marginLeft:'2%'}}>Brand Guide</p>
        <div className="cardRow">
          <p style={{marginLeft:'2%'}}><FontAwesomeIcon icon={faBars}/></p>
          <p><FontAwesomeIcon icon={faPaperclip}/></p>
          <p>1</p>
        </div>
      </div>
      <div id="card3">
        <p style={{marginLeft:'2%'}}>Employee Manual</p>
        <div className="cardRow">
          <p style={{marginLeft:'2%'}}><FontAwesomeIcon icon={faBars}/></p>
          <p><FontAwesomeIcon icon={faPaperclip}/></p>
          <p>1</p>
        </div>
      </div>
      <div style={{marginLeft:'2%',textAlign:'left',color:'lightcyan'}}>Add a Card...</div>
    </div>
  );
}

export default Resources;
