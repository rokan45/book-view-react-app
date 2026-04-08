import { createBrowserRouter } from "react-router";
import Root from "../componet/Root/Root";
import Homepage from "../componet/homepage/Homepage";
import Bookpage from "../componet/bookpage/Bookpage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            { index: true, element: <Homepage/> },
            {
                path: "books",
                element: <Bookpage/>
            }
        ],
        errorElement:<h1>Page Not found</h1>

    }
]);