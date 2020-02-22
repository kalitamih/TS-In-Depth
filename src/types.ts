import { Book, Person } from "./interfaces";

export type PersonBook = Person & Book;
export type BookProperties = keyof Book;
export type BookOrUndefined = Book | undefined;

