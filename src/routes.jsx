import {Route, useLocation} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import ProductList from "./pages/Products/ProductsList/ProductsList";
import Header from "./pages/Shared/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./pages/Shared/Footer/Footer";

const AllRoutes = () => {

    const location = useLocation();

    const isLoginPage = location.pathname === '/login';

    return (
        <div className="h-100">
            {!isLoginPage && <Header />}
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
            </Routes>
            {!isLoginPage && <Footer />}
        </div>
    )
}

export default AllRoutes;