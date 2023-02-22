import React from "react";
import { GetBooksQuery } from "../__generated__/graphql";

interface BookListProps {
  data: GetBooksQuery | undefined;
}

function BookList({ data }: BookListProps) {
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
