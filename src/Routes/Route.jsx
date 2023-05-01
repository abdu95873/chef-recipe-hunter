import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";

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
                element: <Home></Home>,
                loader: ({params})=>fetch(`http://localhost:5000/chef/${params.id}`)
 
             }
        ]
    }
])

export default router