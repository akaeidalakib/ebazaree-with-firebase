
import './App.css';
import Home from './Views/Pages/Home/Home';
import { Route, Routes } from "react-router-dom";
import About from './Views/Pages/About/About';
import Contact from './Views/Pages/Contact/Contact';
import Products from './Views/Pages/Products/Products';
import Product from './Views/Pages/Products/Product/Product';
import Navbar from './Shared/Navbar/Navbar';
// import Footer from './Shared/Footer/Footer';
import Login from './Views/Pages/Login/Login';
import ErrorPage from './Views/Pages/ErrorPage/ErrorPage';
import Cart from './Views/Pages/Cart/Cart';
import Success from './Views/Pages/Cart/Success/Success';
import CheckOut from './Views/Pages/Cart/CheckOut';
import Dashboard from './Views/Pages/Dashboard/Dashboard';
import Orders from './Views/Pages/Dashboard/Orders/Orders';
import AuthProvider from './Views/Pages/Login/Context/AuthProvider';
import ResetPassword from './Views/Pages/Login/ResetPassword/ResetPassword';
import MyAccount from './Views/Pages/Dashboard/MyAccount/MyAccount';
import OrderDetails from './Views/Pages/Dashboard/Orders/OrderDetails/OrderDetails';
import PrivateRoute from './Views/Pages/Login/Private/PrivateRoute';
import Register from './Views/Pages/Login/Register';
import Pdemo from './Views/Pages/Products/Product/pdemo';
import ChangePassword from './Views/Pages/Dashboard/ChangePassword/ChangePassword';
function App() {
  return (
    <div className="">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/success" element={< Success />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/Reset-password" element={<ResetPassword />} />
          <Route path="/pdemo" element={<Pdemo />} />

          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} >
            <Route index element={<PrivateRoute><Orders /></PrivateRoute>} />
            <Route path="/dashboard/orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
            <Route path="/dashboard/myaccount" element={<PrivateRoute><MyAccount /></PrivateRoute>} />
            <Route path="/dashboard/orders/:id" element={<PrivateRoute><OrderDetails /></PrivateRoute>} />
            <Route path="/dashboard/change-password" element={<PrivateRoute><ChangePassword /></PrivateRoute>} />
          </Route>
          <Route path="/:id" element={<Product />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        {/* <Footer /> */}
      </AuthProvider>
    </div>
  );
}

export default App;
