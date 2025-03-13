/*
Snack 3 - Ordinare gli Autori
- Creare un array (authors) che contiene gli autori dei libri.
- Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
- Ordina l’array authors in base all’età, senza creare un nuovo array.
(se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente) */

const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

//Creare un array(authors) che contiene gli autori dei libri.
const authors = books.map(book => book.author)
console.log(authors);

//Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
const areAuthorsAdults = authors.every(author => author.age >= 18)
console.log(areAuthorsAdults);

//Ordina l’array authors in base all’età, senza creare un nuovo array.
//(se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)
if (areAuthorsAdults) {
    authors.sort((a, b) => {
        //vera ordina età in modo crescente
        return a.age - b.age;
    })
} else {
    authors.sort((a, b) => {
        //falso ordina età in modo decrescente
        return b.age - a.age;
    })
}