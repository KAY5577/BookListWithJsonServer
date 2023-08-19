import React from "react";

const BookCreate = ({ handleCreateInputChange, handleCreateSubmit, input }) => {
  let zIndexTop = { zIndex: "10" };
  return (
    <form
      onSubmit={handleCreateSubmit}
      className="position-fixed top-0 w-100 bg-primary px-2 px-md-5 py-4"
      style={zIndexTop}
    >
      <h1 className="fw-bolder text-light">My Book List</h1>
      <label className="text-light fs-4">Title</label>
      <input
        onChange={handleCreateInputChange}
        className="form-control mt-1 mb-2"
        type="text"
        value={input}
      />
      <button className="btn btn-secondary border-light">Create</button>
    </form>
  );
};

export default BookCreate;
