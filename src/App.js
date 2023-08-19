import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
  // State
  const [books, setBooks] = useState([]);
  const [input, setInput] = useState("");

  // Create Area <input>變更
  const handleCreateInputChange = (e) => {
    setInput(e.target.value);
  };

  // Create Area <input>被Submit
  // 新增一筆資料
  const handleCreateSubmit = (e) => {
    e.preventDefault();
    // let theId = Math.floor(Math.random() * 10000);
    // setBooks([...books, { id: theId, title: input }]);
    const createBook = async () => {
      console.log(input);
      const response = await axios.post("http://localhost:3001/books", {
        title: input,
      });
      setBooks([...books, response.data]);
    };
    createBook();
    setInput("");
  };

  // 刪除一筆資料
  const delBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  // 編輯一筆資料
  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        // return { ...book, title: newTitle };
        return { ...book, ...response.data };
      } else {
        return book;
      }
    });
    setBooks(updatedBooks);
  };

  // 取得所有資料
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      {/* Create區 */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <BookCreate
              handleCreateInputChange={handleCreateInputChange}
              handleCreateSubmit={handleCreateSubmit}
              input={input}
            />
          </div>
        </div>
      </div>
      {/* List區 */}
      <div className="container" style={{ marginTop: "210px" }}>
        <div className="row">
          <BookList
            books={books}
            delBookById={delBookById}
            editBookById={editBookById}
          />
        </div>
      </div>
    </>
  );
};

export default App;
