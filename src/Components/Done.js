import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faPaperclip,
  faFileCircleCheck,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";

function DraggableDoneItem({ item, index, moveItem }) {
  const [, ref] = useDrag({
    type: "DONE_ITEM",
    item: { item, index },
  });

  const [, drop] = useDrop({
    accept: "DONE_ITEM",
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
        {item.icons.map((icon, index) => (
          <p key={index}>
            <FontAwesomeIcon icon={icon} />
          </p>
        ))}
      </div>
    </div>
  );
}

function DragDrop() {
  // Initial array of data objects
  const [todotask, setTodoTask] = useState([
    {
      id: 1,
      title: "Focus Group: Corn vs. Flour Tortillas",
      icons: [faBars],
    },
    {
      id: 2,
      title: "New Swag: Socks, Scarves & Salsa",
      icons: [faPaperclip, "5"],
    },
    {
      id: 3,
      title: "Eco-friendly Utensils & Napkins",
      icons: [faFileCircleCheck, "3/3"],
    },
    {
      id: 4,
      title: "Update Yelp Listing",
      icons: [faBars, faPaperclip, "1"],
    },
  ]);

  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...todotask];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setTodoTask(updatedItems);
  };

  return (
    <div id="Todo-card">
      <div id="title">
        <p>Done</p>
        <p style={{ marginRight: "2%" }}>
          <FontAwesomeIcon icon={faEllipsis} />
        </p>
      </div>
      {todotask.map((item, index) => (
        <DraggableDoneItem
          key={index}
          item={item}
          index={index}
          moveItem={moveItem}
        />
      ))}
      <div style={{ marginLeft: "2%", textAlign: "left", color: "lightcyan" }}>
        Add a Card...
      </div>
    </div>
  );
}

export default DragDrop;
