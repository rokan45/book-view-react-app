import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router";

const BookCard = ({books}) => {
    const {bookId,bookName,author,image,rating,category,tags}=books;
  return (
    <Link to={`bookdetails/${bookId}`} className="h-full flex flex-col bg-white rounded-2xl p-4 shadow-md border border-gray-200">
      
      {/* Image */}
      <div className="bg-gray-200 rounded-xl flex items-center justify-center h-56 mb-4">
        <img
          src=
          {image}
          alt="Book"
          className="h-40 object-contain"
        />
      </div>

      {/* Tags */}
      <div className="flex gap-2 mb-2 flex-wrap">
        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
       {tags}
        </span>
        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
          Identity
        </span>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2 min-h-12">
        {bookName}
      </h2>

      {/* Author */}
      <p className="text-gray-500 text-sm mb-2">
        <span className="font-medium text-gray-600">By :</span> {author}
      </p>

      {/* catergory and rating */}
      <div className="mt-auto">
        <div className="border-t border-dashed border-gray-300 my-2"></div>

        <div className="flex justify-between items-center text-gray-600 text-sm">
          <span>{category}</span>

          <div className="flex items-center gap-1">
            <span>{rating}</span>
            <Star size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;