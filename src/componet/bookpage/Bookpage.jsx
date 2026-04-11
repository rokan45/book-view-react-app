import React, { useContext, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import ReadBooks from '../bookself/ReadBooks';
import WishlistBooks from '../bookself/WishlistBooks';

const Bookpage = () => {

    const [activeBtn,setActiveBtn]=useState('read');

    const {storedBook} = useContext(BookContext);
   

    return (
        <div className='mx-auto p-2'>

            {/* Book container */}
            <div className='mx-auto p-5 bg-gray-100 rounded-2xl'>
                <h2 className='text-2xl font-bold text-center'>Books</h2>
            </div>

            {/* sort Button */}
            <div className="flex items-center justify-center mt-5">
                <button className='btn btn-success'>
                    <span>Sort by:</span>
                    <select>
                        <option value="select">Select</option>
                        <option value="rating">Rating</option>
                        <option value="pages">Number of Pages</option>
                    </select>
                </button>
            </div>

            {/* Toggle button */}
            <div className='flex items-center'>
                <button onClick={()=>setActiveBtn('read')} className='btn rounded-r-none'>Read Books</button>
                <button onClick={()=>setActiveBtn('wishlist')} className='btn rounded-l-none'>Wishlist Books</button>
            </div>

            <div className='mt-2'>
                {
                    activeBtn==="read"? <ReadBooks storedBook={storedBook}></ReadBooks>: <WishlistBooks></WishlistBooks>
                }
            </div>
        </div>
    );
};

export default Bookpage;