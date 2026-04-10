import React, { createContext, useState } from 'react';


// eslint-disable-next-line react-refresh/only-export-components
export const BookContext = createContext();

const BookProvider = ({ children }) => {

    const [storedBook, setStoredBook] = useState([]);

    const handleMarkAsRead = () => {

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