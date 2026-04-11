import React, { useState } from 'react';
import { BookContext } from '../../context/BookContext';
import ReadBooks from '../bookself/ReadBooks';
import WishlistBooks from '../bookself/WishlistBooks';

const Bookpage = () => {

    const [activeBtn, setActiveBtn] = useState('read');


    const [sortingType, setSortigType] = useState("");



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
                    <select onChange={(e)=>setSortigType(e.target.value)}>
                        <option value="select">Select</option>
                        <option value="rating">Rating</option>
                        <option value="pages">Pages</option>
                    </select>
                </button>
            </div>

            {/* Toggle button */}
            <div className='flex items-center'>
                <button onClick={() => setActiveBtn('read')} className={activeBtn === "read" ? "btn btn-accent rounded-r-none " : "btn rounded-r-none"}>Read Books</button>

                <button onClick={() => setActiveBtn('wishlist')} className={activeBtn === "read" ? "btn rounded-l-none " : "btn btn-accent rounded-l-none"}>Wishlist Books</button>
            </div>

            <div className='mt-2'>
                {
                    activeBtn === "read" ? <ReadBooks sortingType={sortingType}></ReadBooks> : <WishlistBooks sortingType={sortingType} ></WishlistBooks>
                }
            </div>
        </div>
    );
};

export default Bookpage;