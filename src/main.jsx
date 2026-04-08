import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Root from './componet/Root/Root.jsx'
import Navbar from './componet/navbar/Navbar.jsx'
import Bookpage from './componet/bookpage/Bookpage.jsx'
import Homepage from './componet/homepage/Homepage.jsx'



const router=createBrowserRouter([
  {path:'/',
    element:<Root/>,
    children:[
      {index:true,element:<Homepage/>},
      {
        path:"books",
        element:<Bookpage/>
      }
    ]
    
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
