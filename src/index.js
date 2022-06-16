import React from "react";
import ReactDom from "react-dom/client";

//stateless functional component
// always return JS
// CSS
import "./index.css";
import { DATA } from "./books";
import Book from "./book";
import { greeting } from "./testing/testing";
// setup vars

function Booklist() {
  console.log(greeting);
  return (
    <section className="Booklist">
      {DATA.map((book, index) => {
        const { img, title, author } = book;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Booklist />
  </React.StrictMode>
);
