import React from "react";
import "./Doing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faPaperclip,
  faFileCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import eat from "../Assets/eat.png";
import { useDrag } from "react-dnd";
import { useDrop } from "react-dnd";
import { useState } from "react";

function DraggableDoingItem({ item, index, moveItem }) {
  const [, ref] = useDrag({
    type: "TODO_ITEM", // Define a unique type for your draggable item
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
      </div>
    </div>
  );
}

function Doing() {
  const [todoItems, setTodoItems] = useState([
    // Initial array of data objects
    {
      title: "The Taco Truck World Tour",
      date: "Oct 5",
    },
    {
      image: eat,
    },
    {
      title: "Operation 'Awesome Sauce' - A Recipe For Profit",
      date: "Oct 18",
      attachments: 3,
      fileCircleCheck: "2/5",
    },
    {
      title: "#NoFiller Instagram Campaign",
      attachments: 3,
    },
    {
      title: "Global Franchise Opportunities",
      fileCircleCheck: "4/9",
    },
  ]);

  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...todoItems];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setTodoItems(updatedItems);
  };

  return (
    <div id="Todo-card">
      <div id="title">
        <p>Doing</p>
        <p style={{ marginRight: "2%" }}>
          <FontAwesomeIcon icon={faEllipsis} />
        </p>
      </div>
      {todoItems.map((item, index) => (
        <div key={index}>
          {item.image && (
            <div style={{ backgroundColor: "tomato" }} id="image_card">
              <img
                className="hidebg"
                src={item.image}
                width={"50%"}
                height={"13%"}
                alt="load"
              />
            </div>
          )}
          <DraggableDoingItem
            key={index}
            item={item}
            index={index}
            moveItem={moveItem}
          />
        </div>
      ))}
      <div style={{ marginLeft: "2%", textAlign: "left", color: "lightcyan" }}>
        Add a Card...
      </div>
    </div>
  );
}
export default Doing;
