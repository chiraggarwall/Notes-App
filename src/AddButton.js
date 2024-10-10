import React from "react";

const AddButton = ({onOpen}) => {
  return (
    <>
      <div className="add-box" onClick={onOpen}>
        <p>Add a new note</p>
      </div>
    </>
  );
};

export default AddButton;
