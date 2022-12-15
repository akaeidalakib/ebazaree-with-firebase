import { createBrowserRouter } from "react-router-dom";
import About from "../Views/Pages/About/About";
import Cart from "../Views/Pages/Cart/Cart";
import CheckOut from "../Views/Pages/Cart/CheckOut";
import Success from "../Views/Pages/Cart/Success/Success";
import Contact from "../Views/Pages/Contact/Contact";
import Dashboard from "../Views/Pages/Dashboard/Dashboard";
import MyAccount from "../Views/Pages/Dashboard/MyAccount/MyAccount";
import OrderDetails from "../Views/Pages/Dashboard/Orders/OrderDetails/OrderDetails";
import Orders from "../Views/Pages/Dashboard/Orders/Orders";
import ErrorPage from "../Views/Pages/ErrorPage/ErrorPage";
import Home from "../Views/Pages/Home/Home";
import Login from "../Views/Pages/Login/Login";
import PrivateRoute from "../Views/Pages/Login/Private/PrivateRoute";
import ResetPassword from "../Views/Pages/Login/ResetPassword/ResetPassword";
import Product from "../Views/Pages/Products/Product/Product";
import Products from "../Views/Pages/Products/Products";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/:id"',
                element: <Product></Product>
            },
            {
                path: '/success',
                element: <Success></Success>
            },
            {
                path: '/checkout',
                element: <CheckOut></CheckOut>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <Orders></Orders>
            },
            {
                path: '/dashboard/myaccount',
                element: <MyAccount></MyAccount>
            },
            {
                path: '/dashboard/orders/:id',
                element: <OrderDetails></OrderDetails>
            },
            {
                path: '/dashboard/reset-password',
                element: <ResetPassword></ResetPassword>
            },
            // {
            //     path: '/dashboard/allusers',
            //     element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            // },

        ]
    }
])

export default router;