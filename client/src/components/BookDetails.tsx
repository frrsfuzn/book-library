import React from "react";
import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";
import { Book } from "../__generated__/graphql";

interface BookDetailsProps {
  bookId: string;
}

function BookDetails({ bookId }: BookDetailsProps) {
  const { loading, data } = useQuery(getBookQuery, {
    variables: {
      id: bookId,
    },
  });

  const renderMoreBook = (books: Array<Book | null>) => {
    return (
      <div>
        <h5>More on this author</h5>
        <ul>
          {books.map((book) => (
            <li>{book?.name}</li>
          ))}
        </ul>
      </div>
    );
  };

  const renderBookDetails = () => {
    const book = data?.book;
    if (!book) {
      return <div></div>;
    }
    const { name, genre, author } = book;
    const books = author?.books ?? [];
    return (
      <>
        <p>Title: {name}</p>
        <p>Genre: {genre}</p>
        <p>Author: {author?.name}</p>
        {books.length > 1 && renderMoreBook(books)}
      </>
    );
  };

  return (
    <div>
      <h1>Book Details</h1>
      {loading && <div>Loading book details...</div>}
      {data && renderBookDetails()}
    </div>
  );
}

export default BookDetails;
