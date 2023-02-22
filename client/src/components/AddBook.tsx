import { useQuery, useMutation } from "@apollo/client";
import React, { useState } from "react";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from "../queries/queries";

function AddBook() {
  const [bookName, setBookName] = useState("");
  const [genreBook, setGenreBook] = useState("");
  const [authorId, setAuthorId] = useState("");
  const { loading: loadingGetAuthors, data: AuthorsData } =
    useQuery(getAuthorsQuery);
  const [addBook, { error, loading, data: BookData }] = useMutation(
    addBookMutation,
    {
      variables: {
        name: bookName,
        genre: genreBook,
        authorId,
      },
      refetchQueries: [{ query: getBooksQuery }],
    }
  );

  const displayAuthors = () => {
    if (loadingGetAuthors) return <option disabled>Loading Authors...</option>;

    return AuthorsData?.authors?.map((author) => (
      <option key={author?.id} value={author?.id ?? ""}>
        {author?.name}
      </option>
    ));
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addBook();
  };

  return (
    <div>
      {BookData && <div>Successfully save data!</div>}
      {error && <div>Error while saving the data!</div>}
      {loading && <div>Loaindg...</div>}
      <form onSubmit={submitForm} id="add-book">
        <div className="field">
          <label>Book name:</label>
          <input
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Genre:</label>
          <input
            type="text"
            value={genreBook}
            onChange={(e) => setGenreBook(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Author:</label>
          <select onChange={(e) => setAuthorId(e.target.value)}>
            {displayAuthors()}
          </select>
        </div>

        <button disabled={loading}>+</button>
      </form>
    </div>
  );
}

export default AddBook;
