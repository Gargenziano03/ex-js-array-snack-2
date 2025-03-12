/*
Snack 2 - Il primo libro scontato
- Creare un array (availableBooks) che contiene tutti i libri disponibili.
- Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
- Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi). */

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

//Creare un array (availableBooks) che contiene tutti i libri disponibili.
const availableBooks = books.filter(book => book.available)
console.log(availableBooks);

//Crea un array(discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20 % (mantieni lo stesso formato e arrotonda al centesimo)
const discountedBooks = availableBooks.map(availableBook => {
    //Estrai il prezzo numerico rimuovendo il simbolo '€'
    let priceNumber = parseFloat(availableBook.price.replace('€', ''));

    //Applica lo sconto corretto e arrotonda
    let discountedPrice = (priceNumber * 0.2).toFixed(2) + '€';

    //Restituisci il nuovo oggetto con il prezzo aggiornato
    return {
        ...availableBook,
        price: discountedPrice
    };
});
console.log(discountedBooks);

//Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi)
const fullPricedBook = discountedBooks.find(book => parseFloat(book.price.replace('€', '')) % 1 === 0);
console.log(fullPricedBook);