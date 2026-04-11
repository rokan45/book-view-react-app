import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { Link } from 'react-router';
import EmptyList from '../empty/EmptyList';

const ReadBooks = () => {

    const { storedBook } = useContext(BookContext);
    console.log(storedBook);


    return (

        <div>
            {
                storedBook.length === 0 ? <EmptyList /> : <div>
                    {
                        storedBook.map(book => {
                            const { bookId, image, bookName, author, yearOfPublishing, publisher, totalPages, category, rating } = book

                            return (
                                <div key={book.bookId} className="bg-white border border-gray-200 rounded-xl p-5 flex gap-5 items-start max-w-full">

                                    {/* Book Cover */}
                                    <div className="shrink-0 w-25 h-40 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                                        <img src={image} alt={bookName} className="w-full h-full object-cover" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">

                                        <h2 className="text-base font-semibold text-gray-900 mb-1">{bookName}</h2>
                                        <p className="text-sm text-gray-500 mb-3">By : {author}</p>

                                        {/* Tags + Year */}
                                        <div className="flex flex-wrap items-center gap-2 mb-3">
                                            <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">#Young Adult</span>
                                            <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">#Identity</span>
                                            <span className="text-xs text-gray-500">📅 Year of Publishing: {yearOfPublishing}</span>
                                        </div>

                                        {/* Publisher & Pages */}
                                        <div className="flex flex-wrap gap-4 mb-3 text-xs text-gray-500">
                                            <span>👥 Publisher: {publisher}</span>
                                            <span>📄 Page {totalPages}</span>
                                        </div>

                                        <div className="border-t border-dashed border-gray-300 my-2"></div>

                                        {/* Bottom row */}
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="bg-blue-100 text-blue-700 text-xs px-4 py-1 rounded-full">Category: {category}</span>
                                            <span className="bg-amber-100 text-amber-700 text-xs px-4 py-1 rounded-full">Rating: {rating}</span>
                                            <Link to={`/bookdetails/${bookId}`} className="ml-auto bg-teal-500 hover:bg-teal-600 text-white text-sm px-5 py-1.5 rounded-full transition">
                                                View Details
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            }
        </div>

    );
};

export default ReadBooks;