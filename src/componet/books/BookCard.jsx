import React from 'react';

const BookCard = ({books}) => {
    return (
        <div>
           <h1>Boook name: {books.bookName}</h1> 
        </div>
    );
};

export default BookCard;