import { useState } from "react";
import "./App.css";
import BookList from "./components/BookList";
import { useQuery } from "@apollo/client";

import { gql } from "../src/__generated__/gql";

const getBooksQuery = gql(`
  query GetBooks {
    books {
      name
      id
    }
  }
`);

function App() {
  const { loading, data } = useQuery(getBooksQuery);
  return (
    <div className="App">
      <h1>Book List</h1>
      {loading && "Loading Books..."}
      {!loading && <BookList data={data} />}
    </div>
  );
}

export default App;
