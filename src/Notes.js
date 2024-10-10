import React from "react";
import Note from "./Note"
const Notes = ({notes}) => {
  return <>
  
  <ul className="notes-list">
      {notes.map((note, index) => (
        <Note key={index} note={note} />
      ))}
    </ul>
  
  </>;
};

export default Notes;
