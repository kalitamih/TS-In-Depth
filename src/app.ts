import { UniversityLibrarian, RefBook, Shelf } from "./classes";
import { Book, Author, Librarian, Magazine } from "./interfaces";
import { Category } from "./enums";
import { PersonBook, BookRequiredFields, UpdatedBook, CreateCustomerFunctionType } from "./types";
import { getAllBooks, purge, createCustomer } from "./functions";
import Encyclopedia from "./classes/encyclopedia";


const showHello = (divName: string, name: string) => {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

showHello('greeting', 'TypeScript');

const myBook: Book = {
  id: 5,
  title: 'Colors, Backgrounds, and Gradients',
  author: 'Eric A. Meyer',
  available: true,
  category: Category.CSS,
  pages: 200,
  markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
};


// 4.03

const favoriteAuthor: Author = {
  email: 'ann@gmail.com',
  name: 'Anna',
  numBooksPublished: 10,
};

/*const favoriteLibrarian: Librarian = {
  name: 'Boris',
  email: 'boris@gmail.com',
  department: 'Classical Literature',
  assistCustomer: (name: string) => console.log(`Assist ${name}`)
};*/

// 4.04

const offer: any = {
  book: {
    title: 'Essential TypeScript',
  },
};

console.log(offer.paper?.magazine);

// 4.05

// 05.01

/*const ref: ReferenceItem = new ReferenceItem('Updated Facts and Figures', 2016);
ref.printItem();
ref.publisher = 'Random Publisher';
console.log(ref);
console.log(ref.publisher); */

// 5.02

const refBook = new RefBook('Hello Typescript', 2020, 1);
refBook.printItem();

// 5.03
refBook.printCitation();
console.log(refBook);

// 5.04

const favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Anna';
favoriteLibrarian.assistCustomer('Boris');

// 5.05

const personBook: PersonBook = {
    name: 'Anna',
    email: 'anna@example.com',
    author: 'Boris',
    available: true,
    category: Category.HTML,
    id: 1,
    title: 'Introduction to HTML',
};

// task 06.05
import('./classes').then(module => {
  const reader = new module.Reader();
  reader.name = 'Anna';
  reader.take(getAllBooks()[0]);
  console.log(reader);
});


// task 07.01
const inventory: Array<Book> = [
  { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
  { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
  { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
  { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
];
/*const result1 = purge<Book>(inventory);
console.log(result1);

const result2 = purge([1, 2, 3, 4]);
console.log(result2);*/

/* const bookShelf = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
const firstBook = bookShelf.getFirst();
console.log(firstBook.title); */

const magazines: Array<Magazine> = [
  { title: 'Programming Language Monthly', publisher: 'Code Mags' },
  { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
  { title: 'Five Points', publisher: 'GSU' },
];

const magazineShelf = new Shelf<Magazine>();
magazines.forEach(magazine => magazineShelf.add(magazine));
/*const firstMagazine = magazineShelf.getFirst();
console.log(firstMagazine.title); */

// Task 07.03
magazineShelf.printTitle();
magazineShelf.find('Five Points');

// Task 07.04
const book: BookRequiredFields = {
  id: 1,
  title: 'Some title',
  author: 'Mikhail',
  available: false,
  category: Category.JavaScript,
  markDamaged: null,
  pages: 200
};

const updatedBook: UpdatedBook = {
  id: 1,
  title: 'Refactoring JavaScript'
};

const params: Parameters<CreateCustomerFunctionType> = ['Anna', 30];
createCustomer(...params);

// Task 08.01 
const obj = new UniversityLibrarian();
console.log(obj);

// Task 08.02
obj.name = 'Anna';
obj['printLibrarian']();

// Task 08.03
obj.assistFaculty = null;
obj.teachCommunity = null;

// Task 08.04
const e = new Encyclopedia('Title', 2020, 10);
e.printItem();