import React, { useEffect, useState } from "react";
import PopUp from "./PopUp";
import AddButton from "./AddButton";
import Notes from "./Notes";
const App = () => {
  const [notes, setNotes] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    setNotes(savedNotes);
  }, []);

  const handleAddNote = (note) => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    setNotes([...savedNotes, note]);
  };

  return (
    <>
      <AddButton
        onOpen={() => {
          setIsPopupOpen(true);

          console.log("fgh", isPopupOpen);
        }}
      />
      {isPopupOpen && (
        <PopUp
          handleAddNote={handleAddNote}
          onClose={() => {
            setIsPopupOpen(false);
          }}
        />
      )}
      <Notes notes={notes} />
    </>
  );
};

export default App;
