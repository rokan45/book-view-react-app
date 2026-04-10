import React, { use } from 'react';
import BookCard from './BookCard';

const booksPromise = fetch('/booksData.json').then(res => res.json());


const BooksContainer = () => {

    const books = use(booksPromise);
    console.log(books)
    return (
        <div className='mx-auto p-5'>
            <h1 className='text-center text-3xl font-bold mt-5'>Books</h1>
            <div className='grid grid-cols-3 p-5 gap-2.5'>
                {
                    books.map(books => <BookCard key={books.bookId} books={books}></BookCard>)
                }
            </div>
        </div>
    );
};

export default BooksContainer;