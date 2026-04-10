import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';

const Bookpage = () => {

    const bookContext=useContext(BookContext);
    console.log(bookContext)

    return (
        <div>
            <h1>This is book page</h1>
        </div>
    );
};

export default Bookpage;