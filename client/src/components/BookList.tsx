import React from "react";
import { useQuery, gql } from "@apollo/client";

const getBooksQuery = gql`
  {
    books {
      name
    }
  }
`;

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);
  console.log("data", data);
  console.log("loading", loading);
  return (
    <div>
      <ul id="book-list">
        <li>Book one</li>
      </ul>
    </div>
  );
}

export default BookList;
