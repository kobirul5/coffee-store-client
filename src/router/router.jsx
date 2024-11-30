import { createBrowserRouter,} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import Home from "../components/Home";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Users from "../components/Users/Users";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=> fetch('https://coffee-store-server-xi-one.vercel.app/coffee')
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/users',
                element: <Users></Users>,
                loader: ()=>fetch("https://coffee-store-server-xi-one.vercel.app/users")
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
        loader: ({params})=> fetch(`https://coffee-store-server-xi-one.vercel.app/coffee/${params.id}`)
    },
    

])

export default router