import React, { useState } from "react";
import BookEdit from "./BookEdit";
import iconDel from "../icon/trash-solid.svg";
import iconEdit from "../icon/pen-to-square-solid.svg";

const BookShow = ({ book, delBookById, editBookById }) => {
  // 樣式設置
  let iconBoxStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    border: "2px solid blue",
  };
  let iconStyle = {
    width: "18px",
    opacity: "0.4",
  };

  // State
  const [showEdit, setShowEdit] = useState(false);

  // 點擊刪除
  const handleClickDel = () => {
    delBookById(book.id);
  };

  // 判斷是否開啟<BookEdit/>
  let content = (
    <div className="w-100">
      {/* <p>ID:{book.id}</p> */}
      <h4 className="m-0 text-secondary">{book.title}</h4>
    </div>
  );
  if (showEdit) {
    content = (
      <BookEdit
        book={book}
        editBookById={editBookById}
        showEdit={showEdit}
        setShowEdit={setShowEdit}
      />
    );
  }

  //toggle Edit button
  const handleClickEdit = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-xxl-3 p-3">
      <div className="card border shadow p-3 pb-4 mb-3">
        {/* Edit_Button and Del_Button */}
        <div className="col-12 d-flex justify-content-end mb-1">
          <button onClick={handleClickEdit} className="btn p-0 me-2">
            <div className="iconBox border border-2" style={iconBoxStyle}>
              <img src={iconEdit} alt="" style={iconStyle} />
            </div>
          </button>
          <button onClick={handleClickDel} className="btn p-0">
            <div className="iconBox border border-2" style={iconBoxStyle}>
              <img src={iconDel} alt="" style={iconStyle} />
            </div>
          </button>
        </div>
        {/* Image */}
        <div className="col-12">
          <div className="imgBox overflow-hidden">
            <img
              className="w-100"
              src={`https://picsum.photos/seed/${book.id}/300/200`}
              alt="img"
            />
          </div>
        </div>
        {/* Title */}
        <div className="col-12 pt-3">{content}</div>
      </div>
    </div>
  );
};

export default BookShow;
