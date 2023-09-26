import React from "react";
import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faBars,
  faPaperclip,
  faFileCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import drone from "../Assets/drone.png"; // Import the correct image
import { useDrag } from "react-dnd";
import { useDrop } from "react-dnd";
import { useState } from "react";

function DraggableTodoItem({ item, index, moveItem }) {
  const [, ref] = useDrag({
    type: "TODO_ITEM", // Change the type to match the Doing component
    item: { item, index },
  });
  const [, drop] = useDrop({
    accept: "TODO_ITEM",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });
  return (
    <div
      ref={(node) => ref(drop(node))}
      key={index}
      id={`card${index}`}
      style={{ backgroundColor: "white", marginLeft: "2%", marginRight: "2%" }}
    >
      <p style={{ marginLeft: "2%" }}>{item.title}</p>

      <div className="cardRow">
        {item.date && <p>{item.date}</p>}

        {item.attachments && (
          <>
            <p>
              <FontAwesomeIcon icon={faPaperclip} />
            </p>
            <p>{item.attachments}</p>
          </>
        )}
        {item.fileCircleCheck && (
          <>
            <p>
              <FontAwesomeIcon icon={faFileCircleCheck} />
            </p>
            <p>{item.fileCircleCheck}</p>
          </>
        )}

        {item.status && (
          <>
            <p>{item.status}</p>
            <p>
              <FontAwesomeIcon icon={faBars} />
            </p>
          </>
        )}
      </div>
    </div>
  );
}

function Todo() {
  const [todoCard, setTodoCard] = useState([
    // Modify the data structure to match the Doing component
    {
      title: "Build A Better Burrito: & Layers To Success",
      status: "0/7",
    },
    {
      title: "Nacho Ordinary Birthday-Event Space Rentals",
    },
    {
      image: drone,
    },
    {
      title: "Taco Drone Delivery Service",
      date: "Nov 10",
      attachments: 3,
    },
    {
      title: "Superbowl Ad-'Super Salad Bowls'",
      date: "Dec 12",
      attachments: 3,
    },
  ]);

  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...todoCard];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setTodoCard(updatedItems);
  };

  return (
    <div id="Todo-card">
      <div id="title">
        <p>Todo</p>
        <p style={{ marginRight: "2%" }}>
          <FontAwesomeIcon icon={faEllipsis} />
        </p>
      </div>
      {todoCard.map((item, index) => (
        <div key={index}>
          {item.image && (
            <div style={{ backgroundColor: "green" }} id="image_card">
              <img
                className="hidebg"
                src={item.image}
                width={"50%"}
                height={"13%"}
                alt="load"
              />
            </div>
          )}
          <DraggableTodoItem
            key={index}
            item={item}
            index={index}
            moveItem={moveItem}
          />
        </div>
      ))}
      <div style={{ marginLeft: "2%", textAlign: "left", color: "lightcyan" }}>
        <input style={{ border: "none" }} placeholder="Add a Card.." />
      </div>
    </div>
  );
}

export default Todo;
