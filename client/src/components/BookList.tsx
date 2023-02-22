import React from "react";
import { useQuery } from "@apollo/client";
import { gql } from "../__generated__";
import { getBooksQuery } from "../queries/queries";

function BookList() {
  const { loading, data } = useQuery(getBooksQuery);
  if (loading) return <div>Loading Books...</div>;
  return (
    <div>
      <ul id="book-list">
        {data?.books?.map((book) => (
          <li key={book?.id}>{book?.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
