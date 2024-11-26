import { createBrowserRouter,} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import Home from "../components/Home";


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
        path: 'updateCoffee',
        element: <UpdateCoffee></UpdateCoffee>
    }
])

export default router