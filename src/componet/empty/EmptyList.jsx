import React from 'react';
import { FaBookOpen } from 'react-icons/fa';



const EmptyList = () => {
    return (
        <div className='mx-10 flex flex-col justify-center  items-center px-15 py-22 bg-gray-50 rounded-2xl mt-10'>
            <div className='mt-5'><FaBookOpen className='text-6xl text-gray-400 *:' /></div>
            <h2 className='font-bold text-gray-400'>No books in the list</h2>
        </div>
    );
};

export default EmptyList;