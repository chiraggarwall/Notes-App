import React, { useState } from "react";
const PopUp = ({ handleAddNote, onClose }) => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const handleSubmit = () => {
    if (title || des) {
      const noteInfo = {
        title,
        des,
      };
      handleAddNote(noteInfo);
    }
  };

  return (
    <>
      <div className="popup-box show">
        <form onSubmit={handleSubmit}>
          <h2>Add Note</h2>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            value={des}
            onChange={(e) => setDes(e.target.value)}
            placeholder="Description"
          />
          <button type="submit">Add Note</button>
          <button
            type="button"
            onClick={onClose}
          >
            Close
          </button>
        </form>
      </div>
    </>
  );
};
export default PopUp;
