import {Route, useLocation} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import ProductList from "./pages/Products/ProductsList/ProductsList";
import Header from "./pages/Shared/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./pages/Shared/Footer/Footer";
import LoginPage from "./pages/Auth/Login/LoginPage";
import RegisterPage from "./pages/Auth/Register/RegisterPage";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";

const AllRoutes = () => {

    const location = useLocation();

    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';
    const isCartPage = location.pathname === '/cart';

    return (
        <div className="h-100">
            {!isLoginPage && !isRegisterPage && <Header/>}
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/products" element={<ProductList/>}/>
                <Route path="/cart" element={<ShoppingCart/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
            </Routes>
            {!isLoginPage && !isRegisterPage && !isCartPage &&  <Footer/>}
        </div>
    )
}

export default AllRoutes;