import { createBrowserRouter,} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>
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