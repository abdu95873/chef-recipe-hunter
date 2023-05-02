import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Chef from "../Pages/Chef/Chef";
import Recipes from "../Pages/Recipes/Recipes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
               path:'/',
               element: <Home></Home>,
               loader: ()=>fetch(`http://localhost:5000/chef`)

            },
            {
                path:'/chef/:id',
                element: <Chef></Chef>,
                loader: ({params})=>fetch(`http://localhost:5000/chef/${params._id}`)
 
             },
             {
                path: '/login',
                element:<Login></Login>
             },
             {
                path: '/register',
                element:<Register></Register>
             },
             {
                path: '/recipes',
                element:<Recipes></Recipes>
             }

        ]
    }
])

export default router