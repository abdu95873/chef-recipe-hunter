import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Chef from "../Pages/Chef/Chef";

import PrivateRoute from "./PrivateRoute";
import NotFound from "../Pages/Shared/NotFound/NotFound";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch(`https://chef-hunter-server-abdu95873.vercel.app/chef`)

         },
         {
            path: '/chef/:id',
            element: <PrivateRoute><Chef></Chef></PrivateRoute>,
            loader: ({ params }) => fetch(`https://chef-hunter-server-abdu95873.vercel.app/chef/${params.id}`)

         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         },
         {
            path: '/blog',
            element: <Blog></Blog>
         },


      ]
   },
   
   {
      path: '/*',
      element: <NotFound></NotFound>
   }
])

export default router