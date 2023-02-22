import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "../__generated__";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

function BookList() {
  const { loading, data } = useQuery(getBooksQuery);
  const [bookId, setBookId] = useState<string>("");
  if (loading) return <div>Loading Books...</div>;
  return (
    <div className="book-list-container">
      <div>
        <h1>Book List</h1>
        <ul id="book-list">
          {data?.books?.map((book) => (
            <li key={book?.id} onClick={() => setBookId(book?.id ?? "")}>
              {book?.name}
            </li>
          ))}
        </ul>
      </div>
      <BookDetails bookId={bookId} />
    </div>
  );
}

export default BookList;
