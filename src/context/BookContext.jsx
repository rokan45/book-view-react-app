import React, { createContext, useState } from 'react';


// eslint-disable-next-line react-refresh/only-export-components
export const BookContext = createContext();

const BookProvider = ({ children }) => {

    const [storedBook, setStoredBook] = useState([]);

    const handleMarkAsRead = (currentBook) => {

        const isExistBook=storedBook.find((book)=>book.bookId===currentBook.bookId);
        if(isExistBook){
            alert("Book Already existed!")
        }
        else{
            setStoredBook([...storedBook,currentBook]);
        }

        console.log(currentBook,storedBook,"Book")
    }
    const handleWishListBook = () => {

    }

    const data = {
        storedBook,
        setStoredBook,
        handleMarkAsRead,
        handleWishListBook,
    }

    return <BookContext.Provider value={data}>{children}</BookContext.Provider>
};

export default BookProvider;