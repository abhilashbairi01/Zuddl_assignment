import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faBars,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import circle from "../Assets/load.png";
import "./Main.css";
import { useDrop } from "react-dnd";
import { useDrag } from "react-dnd";

// Create an array of resource data

function DraggableResourceItem({ resource, index, moveItem }) {
  const [, ref] = useDrag({
    type: "RESOURCE_ITEM", // Define a unique type for your draggable item
    item: { resource, index },
  });
  const [, drop] = useDrop({
    accept: "RESOURCE_ITEM",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });
  return (
    <>
      <div key={index} ref={(node) => ref(drop(node))} className="card">
        <p style={{ marginLeft: "2%" }}>{resource.title}</p>
        <div className="cardRow">
          <p style={{ marginLeft: "2%" }}>
            <FontAwesomeIcon icon={resource.icon} />
          </p>
          <p>
            <FontAwesomeIcon icon={resource.attachmentIcon} />
          </p>
          <p>{resource.count}</p>
        </div>
      </div>
    </>
  );
}

function Resources() {
  const [resourceData, setResourceData] = useState([
    {
      title: "Financial and Growth Data",
      icon: faBars,
      attachmentIcon: faPaperclip,
      count: 5,
    },
    {
      title: "2017 Goals And KPIs",
      icon: faBars,
      attachmentIcon: faPaperclip,
      count: 2,
    },
    {
      title: "Brand Guide",
      icon: faBars,
      attachmentIcon: faPaperclip,
      count: 1,
    },
    {
      title: "Employee Manual",
      icon: faBars,
      attachmentIcon: faPaperclip,
      count: 1,
    },
  ]);
  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...resourceData];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setResourceData(updatedItems);
  };

  return (
    <div id="Resource-card">
      <div id="title">
        <p>Resources</p>
        <p style={{ marginRight: "2%" }}>
          <FontAwesomeIcon icon={faEllipsis} />
        </p>
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
      {resourceData.map((resource, index) => (
        <DraggableResourceItem
          key={index}
          resource={resource}
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

export default Resources;
