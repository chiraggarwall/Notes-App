// import React, { useState } from "react";
import "./NotesApp.css"; // Importing the basic CSS
// import Popup from "./Popup";
// import Show from "./Show";

// const NotesApp = () => {
//   const [notes, setNotes] = useState(
//     JSON.parse(localStorage.getItem("notes")) || []
//   );

//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const handlePopupToggle = (isOpen) => {
//     setIsPopupOpen(isOpen);
//   };

//   const updatedNotes = (note) => {
//     let newNote = [...notes, note];
//     setNotes(newNote);
//     localStorage.setItem("notes", JSON.stringify(newNote));
//   };

//   const handleAddNotesClick = (e) => {
//     e.preventDefault();
//     setIsPopupOpen(true);
//   };

//   return (
//     <>
//       <button onClick={handleAddNotesClick}>Add +</button>
//       <br />
//       {isPopupOpen && (
//         <Popup updatedNotes={updatedNotes} onClose={handlePopupToggle} />
//       )}

//       {notes.map((note, index) => {
//         return (
//           <>
//             <Show key={note.id} onClose={handlePopupToggle} note={note} />
//           </>
//         );
//       })}
//     </>
//   );
// };

// export default NotesApp;
//Hello Git
import React, { useState, useEffect } from "react";

const NotesApp = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [update, setUpdate] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // Effect to sync notes with local storage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (e) => {
    e.preventDefault();
    if (title || description) {
      const notesInfo = { title, description };
      if (!update) {
        setNotes((prevNotes) => [...prevNotes, notesInfo]);
      } else {
        setNotes((prevNotes) => {
          const updatedNotes = [...prevNotes];
          updatedNotes[updateId] = notesInfo;
          return updatedNotes;
        });
        setUpdate(false);
      }
      closePopup();
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setTitle("");
    setDescription("");
  };

  const deleteNote = (index) => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
  };

  const updateNote = (index, tit, desc) => {
    setUpdate(true);
    setUpdateId(index);
    setTitle(tit);
    setDescription(desc);
    setShowPopup(true);
  };

  return (
    <div>
      <div
        className="add-box"
        onClick={() => {
          setShowPopup(true);
          setUpdate(false);
        }}
      >
        <button>Add Note</button>
      </div>

      {showPopup && (
        <div className="popup-box">
          <div className="popup-content">
            {/* Or Close Button as a normal button */}
            <button onClick={closePopup} className="close-btn">
              Close
            </button>

            <div className="title">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="description">
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <button onClick={handleAddNote}>
              {update ? "Update Note" : "Add Note"}
            </button>
          </div>
        </div>
      )}

      <ul>
        {notes.map((note, index) => (
          <li key={index} className="note">
            <div className="details">
              <p>{note.title}</p>
              <span>{note.description}</span>
            </div>
            <div className="bottom-content">
              <div className="settings">
                <i
                  onClick={(e) => e.stopPropagation()}
                  className="uil uil-ellipsis-h"
                ></i>
                <ul className="menu">
                  <li
                    onClick={() =>
                      updateNote(index, note.title, note.description)
                    }
                  >
                    <i className="uil uil-pen"></i>Edit
                  </li>
                  <li onClick={() => deleteNote(index)}>
                    <i className="uil uil-trash"></i>Delete
                  </li>
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesApp;
//notes
//modal,notes
//     ,note