import { createBrowserRouter } from "react-router";
import Root from "../componet/Root/Root";
import Homepage from "../componet/homepage/Homepage";
import Bookpage from "../componet/bookpage/Bookpage";
import Errorpage from "../error/Errorpage";
import BookDetails from "../componet/books/BookDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { index: true, element: <Homepage /> },
            {
                path: "books",
                element: <Bookpage />
            }, 
            {
                path:"bookdetails/:bookId",
                element:<BookDetails/>,
                loader:()=>fetch('/booksData.json'),
            }
        ],
        errorElement: <Errorpage />

    }
]);