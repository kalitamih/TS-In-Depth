import { Book, Person, Author } from "./interfaces";

export type PersonBook = Person & Book;
export type BookProperties = keyof Book;
export type BookOrUndefined = Book | undefined;
export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;
export type AuthorEmail = Omit<Author, 'email'>;
export type CreateCustomerFunctionType = (name: string, age?: number, city?: string) => void;