import React from "react";
import BookShow from "./BookShow";

const BookList = ({ books, delBookById, editBookById }) => {
  return (
    <div className="col-12 p-3 d-flex flex-wrap pt-5 justify-content-center">
      {books.map((book, index) => {
        return (
          <BookShow
            key={index}
            book={book}
            delBookById={delBookById}
            editBookById={editBookById}
          />
        );
      })}
    </div>
  );
};

export default BookList;
