import React, { useState } from "react";
import "./NotesApp.css"; // Importing the basic CSS
import Popup from "./Popup";
import Show from "./Show";

const NotesApp = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupToggle = (isOpen) => {
    setIsPopupOpen(isOpen);
  };

  const updatedNotes = (note) => {
    let newNote = [...notes, note];
    setNotes(newNote);
    localStorage.setItem("notes", JSON.stringify(newNote));
  };

  const handleAddNotesClick = (e) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  return (
    <>
      <button onClick={handleAddNotesClick}>Add +</button>
      {isPopupOpen && (
        <Popup updatedNotes={updatedNotes} onClose={handlePopupToggle} />
      )}

      {notes.map((note, index) => {
        return (
          <>
            <Show key={note.id} onClose={handlePopupToggle} note={note} />
          </>
        );
      })}
    </>
  );
};

export default NotesApp;

//notes
//modal,notes
//     ,note
