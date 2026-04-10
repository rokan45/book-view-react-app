import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { bookId } = useParams();

    const booksData = useLoaderData();

    const selectedBook = booksData.find(
        book => book.bookId === Number(bookId)
    );

    const { bookName, author, image, rating, category, tags ,review,totalPages,publisher,yearOfPublishing} = selectedBook

    return (
        <div class="max-w-6xl mx-auto p-6 bg-gray-50  shadow-md">

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                {/* Left: Book Image */}
                <div class="bg-gray-200 rounded-xl flex items-center justify-center p-6">
                    <img
                        src={image}
                        alt="Book Cover"
                        class="max-h-105 object-contain"
                    />
                </div>


                <div class="flex flex-col p-2">


                    <h1 class="text-3xl font-bold text-gray-800 mb-2">
                        {bookName}
                    </h1>

                    {/* Author */}
                    <p class="text-gray-500 mb-4">
                        <span class="font-medium text-gray-600">By :</span> {author}
                    </p>

                    {/* devider */}
                     <div class="border-t border-dashed border-gray-300 my-1"></div>

                    {/* Category */}
                    <p class="text-gray-800 mb-4 font-bold">{category}</p>

                    {/* devider */}
                    <div class="border-t border-dashed border-gray-300 my-1"></div>

                    {/* Review */}
                    <div class="mb-4">
                        <p class="text-gray-500 text-sm leading-relaxed">
                          <span className='text-black font-bold'>Review</span> : {review}
                        </p>
                    </div>

                    {/* Tags */}
                    <div class="flex gap-2 mb-4 flex-wrap">
                        <span className='text-black font-bold'>Tags</span>
                        <span class="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                           {tags}
                        </span>
                        <span class="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                            #Identity
                        </span>
                    </div>

                    {/* Divider */}
                    <div class="border-t border-dashed border-gray-300 my-4"></div>

                    {/* Info */}
                    <div class="space-y-2 text-sm text-gray-600 mb-6">
                        <p><span class="font-medium text-gray-700">Number of Pages:</span> {totalPages}</p>
                        <p><span class="font-medium text-gray-700">Publisher:</span> {publisher}</p>
                        <p><span class="font-medium text-gray-700">Year of Publishing:</span> {yearOfPublishing}</p>
                        <p><span class="font-medium text-gray-700">Rating:</span>{rating}</p>
                    </div>

                    {/* Buttons */}
                    <div class="flex justify-between gap-3 mt-auto">
                        <div className='flex justify-center items-center gap-2.5'>
                            <button class="px-5 py-2 rounded-lg border border-gray-400 text-gray-700 hover:bg-gray-200 transition">
                                Read
                            </button>
                            <button class="px-5 py-2 rounded-lg bg-teal-500 text-white hover:bg-teal-600 transition">
                                Wishlist
                            </button>

                        </div>
                        <Link to={"/"}><button className='btn btn-info'>Go Home</button></Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default BookDetails;