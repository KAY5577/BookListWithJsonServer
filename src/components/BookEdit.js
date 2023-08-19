import React, { useState } from "react";

const BookEdit = ({ book, editBookById, showEdit, setShowEdit }) => {
  const [title, setTitle] = useState(book.title);

  const handleEditInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleClickEditSubmit = (e) => {
    e.preventDefault();
    console.log("book.id=", book.id);
    editBookById(book.id, title);
    setShowEdit(!showEdit);
  };
  return (
    <form onSubmit={handleClickEditSubmit} className="w-100">
      <label>Title</label>
      <input
        onChange={handleEditInputChange}
        className="form-control my-1"
        value={title}
      />
      <button className="btn btn-info">Save</button>
    </form>
  );
};

export default BookEdit;
