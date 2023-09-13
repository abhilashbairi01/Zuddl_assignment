import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import "./header.css";
import dog from "../Assets/dog.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faUserFriends } from "@fortawesome/free-solid-svg-icons";
function header() {
  return (
    <div>
      <div id="navbar">
        <div id="navbar-left">
          <p>Taco's Taco </p>
          <p>
            <AiOutlineStar />
          </p>
          <p>|</p>
          <p>
            <img src={dog} alt="dog" width={"20px"} height={"20px"} />
          </p>
          <p>Taco&Co</p>
          <p>free</p>
          <p>
            <FontAwesomeIcon icon={faUserFriends} />
          </p>
          <p>Team Visible</p>
        </div>
        <div id="navbar-right">
          <p>
            <FontAwesomeIcon icon={faEllipsis} />
          </p>
          <p>show menu</p>
        </div>
      </div>
    </div>
  );
}

export default header;
