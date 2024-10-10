import React from "react";

const Note = ({note}) => {
  return <>
   <li className="note">
      <div className="details">
        <p>{note.title}</p>
        <span>{note.description}</span>
      </div>
    </li></>;
};

export default Note;
