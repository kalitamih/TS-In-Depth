import { Book, Logger } from "./interfaces";
import { Category } from "./enums";
import { BookOrUndefined, BookProperties } from "./types";

export const getAllBooks = () => {
    const books: readonly Book[] = <const>[ 
        {
          id: 1,
          title: 'Refactoring JavaScript',
          author: 'Evan Burchard',
          available: true,
          category: Category.JavaScript
        },
        {
          id: 2,
          title: 'JavaScript Testing',
          author: 'Liang Yuxian Eugene',
          available: false,
          category: Category.JavaScript
        },
        {
          id: 3,
          title: 'CSS Secrets',
          author: 'Lea Verou',
          available: true,
          category: Category.CSS
        },
        {
          id: 4,
          title: 'Mastering JavaScript Object-Oriented Programming',
          author: 'Andrea Chiarelli',
          available: true,
          category: Category.JavaScript
        }    
    ];
  
    return books;
};
  
export const logFirstAvailable = (books: readonly any[] = getAllBooks()): void => {
    const numberOfBooks: number = books.length;
    let firstAvailableBookTitle: string = '';
  
    for (const currentBook of books) {
      if (currentBook.available) {
        firstAvailableBookTitle = currentBook.title;
        break;
      }
    }
  
    console.log(`Total Books: ${numberOfBooks}`);
    console.log(`First Available Book: ${firstAvailableBookTitle}`);
};
  
 // logFirstAvailable(getAllBooks());
  
export const getBookTitlesByCategory = (category: Category = Category.JavaScript): Array<string> => {
    console.log(`Getting books in category: ${Category[category]}`);
  
    const allBooks = getAllBooks();
    const filteredTitles: string[] = [];
  
    for (let currentBook of allBooks) {
      if (currentBook.category === category) {
        filteredTitles.push(currentBook.title);
      }
    }
  
    return filteredTitles;
};
  
export const logBookTitles = (titles: string[]): void => {
    for (const title of titles) {
      console.log(title);
    }
};  
 
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));

export const getBookAuthorByIndex = (index: number): [string, string] => {
    const books = getAllBooks();
    const { title, author } = books[index];
    return [title, author];
};

/*export const calcTotalPages = (): BigInt => {
    const data = <const>[
      { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
      { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
      { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];
  
    let result = data.reduce((acc: bigint, obj) => {
      return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);
  
    return result;
};*/
  
  // Task 03
  
getBookTitlesByCategory(Category.JavaScript).forEach((val, id) => console.log(++id + ' - ' + val));  
  
export const getBookByID = (id: number): BookOrUndefined => {
    return getAllBooks().find((item) => item.id === id)
};
  
// console.log(getBookByID(1));
  
export const createCustomerID = (name: string, id: number): string => {
    return `${name}${id}`;
};
  
//  const myID = createCustomerID('Ann', 10);
// console.log(myID);
  
//  let IdGenerator = (name: string, id: number) => `${name}${id}`;
  
// IdGenerator = createCustomerID;
  
//  console.log(IdGenerator('Ann', 10));
  
export const createCustomer = (name: string, age?: number, city?: string): void => {
    console.log(`Creating customer ${name}`);
  
    if (age) {
      console.log(`Age: ${age}`);
    }
  
    if (city) {
      console.log(`City: ${city}`);
    }
};
/*  
  createCustomer('Ann');
  createCustomer('Boris', 6);
  createCustomer('Clara', 12, 'Atlanta');  
  console.log(getBookTitlesByCategory());
*/
  
export const сheckoutBooks = (customer: string, ...bookIDs: number[]): string[] => {
    console.log(`Checking out books for ${customer}`);
  
    let booksCheckedOut: string[] = [];
  
    for (const id of bookIDs) {
      const book = getBookByID(id);
      if (book && book.available) {
        booksCheckedOut.push(book.title);
      }
    };
  
    return booksCheckedOut;
};
  
// const myBooks: string[] = сheckoutBooks('Ann', 1, 3, 4);
// console.log(myBooks);

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
  
export function getTitles(...args: any[]): string[] {  
    const books: Readonly<any> = getAllBooks();
  
    if (args.length === 0) {
      return [];
    }
    else if (args.length === 1) {
      const [arg] = args;
  
      if (typeof arg === 'string') {
        return books.filter(book => book.author === arg).map(book => book.title);
      }
      else if (typeof arg === 'boolean') {
        return books.filter(book => book.available === arg).map(book => book.title);
      }
    }
    else if (args.length === 2) {
      const [id, available] = args; 
  
      if (typeof id === 'number' && available === 'boolean') {
        return books.filter(book => book.id === id && book.available === available).map(book => book.title);
      }
    }
};
  
// const checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);
  
export function assertStringValue(val: any): asserts val is string {
    if (typeof val !== 'string') {
      throw new Error('value should have been a string.');
    }
};
  
const bookTitleTransform = (title: any) => {
    assertStringValue(title);
  
    return [...title].reverse().join('');
};
  
// console.log(bookTitleTransform(getAllBooks()[0].title));
  
//console.log(bookTitleTransform(3));

// 4
  
export const printBook = (book: Book): void => {
    console.log(`${book.title} by ${book.author}`);
};  

export const getBookProp = (book: Book, prop: BookProperties): any => {
    if (typeof book[prop] === 'function') {
      return (book[prop] as Function).name;
    }
    return book[prop];
};
  
console.log(getBookProp(getAllBooks()[0], 'title'));        // Refactoring JavaScript
console.log(getBookProp(getAllBooks()[0], 'markDamaged'));  // undefined
// console.log(getBookProp(getAllBooks()[0], 'isbn'));      // error

let logDamage: Logger;
logDamage = (damage: string) => console.log('Damage reported: ' + damage);
logDamage('coffee stains');


// 05.01  
  
/*
const ref: ReferenceItem = new ReferenceItem('Updated Facts and Figures', 2016);
ref.printItem();
ref.publisher = 'Random Publisher';
console.log(ref);
console.log(ref.publisher); 
*/

export function purge<T>(inventory: Array<T>): Array<T> {
  return inventory.slice(2);
}