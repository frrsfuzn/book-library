/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetAuthors {\n    authors {\n      name\n      id\n    }\n  }\n": types.GetAuthorsDocument,
    "\n  query GetBooks {\n    books {\n      name\n      id\n    }\n  }\n": types.GetBooksDocument,
    "\n  mutation AddBookMutation($name: String!, $genre: String!, $authorId: ID!) {\n    addBook(name: $name, genre: $genre, authorId: $authorId){\n      name\n      id\n    }\n  }\n": types.AddBookMutationDocument,
    "\n  query GetBook($id: ID!){\n    book(id: $id){\n      id\n      name\n      genre\n      author{\n        id\n        name\n        age\n        books{\n          name\n          id\n        }\n      }\n    }\n  }\n": types.GetBookDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAuthors {\n    authors {\n      name\n      id\n    }\n  }\n"): (typeof documents)["\n  query GetAuthors {\n    authors {\n      name\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetBooks {\n    books {\n      name\n      id\n    }\n  }\n"): (typeof documents)["\n  query GetBooks {\n    books {\n      name\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddBookMutation($name: String!, $genre: String!, $authorId: ID!) {\n    addBook(name: $name, genre: $genre, authorId: $authorId){\n      name\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation AddBookMutation($name: String!, $genre: String!, $authorId: ID!) {\n    addBook(name: $name, genre: $genre, authorId: $authorId){\n      name\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetBook($id: ID!){\n    book(id: $id){\n      id\n      name\n      genre\n      author{\n        id\n        name\n        age\n        books{\n          name\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetBook($id: ID!){\n    book(id: $id){\n      id\n      name\n      genre\n      author{\n        id\n        name\n        age\n        books{\n          name\n          id\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;