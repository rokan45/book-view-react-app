import React, { createContext, useState } from 'react';


// eslint-disable-next-line react-refresh/only-export-components
export const BookContext = createContext();

const BookProvider = ({ children }) => {

    // using state for readbook
    const [storedBook, setStoredBook] = useState([]);

    // using state for wishlist book
    const [wishlistStore,setWishliststore]=useState([]);


    // handle mark as read button event
    const handleMarkAsRead = (currentBook) => {

        const isExistBook=storedBook.find((book)=>book.bookId===currentBook.bookId);
        if(isExistBook){
            alert("Book Already exist!")
        }
        else{
            alert("Book is added mark as read book")
            setStoredBook([...storedBook,currentBook]);
        }

        console.log(currentBook,storedBook,"Book")
    }


    // handle wishlist button event
    const handleWishListBook = (wishlistbook) => {

        const isExistBook=wishlistStore.find((book)=>book.bookId===wishlistbook.bookId);
        if(isExistBook){
            alert("Book Already exist!")
        }
        else{
            alert("Book is added to wishlist!")
            setWishliststore([...wishlistStore,wishlistbook]);
        }

    }

    const data = {
        storedBook,
        setStoredBook,
        wishlistStore,
        setWishliststore,
        handleMarkAsRead,
        handleWishListBook,
    }

    return <BookContext.Provider value={data}>{children}</BookContext.Provider>
};

export default BookProvider;