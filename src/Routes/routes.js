import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import AddToCart from "../Pages/AddToCart/AddToCart";
import Login from "../Pages/Authentication/Login/Login";
import PrivateRoute from "../Pages/Authentication/PrivateRoute/PrivateRoute";
import Register from "../Pages/Authentication/Register/Register";
import Everything from "../Pages/Everything/Everything";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Main />,
        children : [
            {
                path:"/",
                element : <Home />
            },
            {
                path:"everything",
                element : <PrivateRoute >
                    <Everything />
                </PrivateRoute>
            },
            {
               path:"login",
               element : <Login />
            },
            {
               path:"register",
               element : <Register />
            },
            {
               path:"addToCart/:id",
               element : <AddToCart />
            },
        ]
    }
]);

export default router