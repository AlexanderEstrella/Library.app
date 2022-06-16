import React from "react";

const Book = (props) => {
  const { img, title, author } = props;
  const clickHandler = () => {
    alert("hello");
  };
  const complex = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        example
      </button>
      <button type="button" onClick={() => complex(author)}>
        complex
      </button>
    </article>
  );
};

export default Book;
