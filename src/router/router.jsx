import { createBrowserRouter,} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import Home from "../components/Home";
import Login from "../components/Login";
import SignUp from "../components/SignUp";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=> fetch('http://localhost:5000/coffee')
            }
        ]
    },
    {
        path:'addCoffee',
        element: <AddCoffee></AddCoffee>
    },
    {
        path: 'updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
    },
    {
        path:'/login',
        element: <Login></Login>
    },
    {
        path: '/signUp',
        element: <SignUp></SignUp>
    }
])

export default router