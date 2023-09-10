import "./ShoppingCart.css";
import {useEffect, useState} from "react";
import ProductService from "../../repository/productRepository/ProductRepository";
import ShoppingCartService from "../../repository/shoppingCartRepository/ShoppingCartRepository";
import Swal from "sweetalert2";
import swal from "sweetalert";
import {BiSolidDownArrow, BiSolidUpArrow} from "react-icons/bi";
import ShoppingCartTerm from "./ShoppingCartTerm/ShoppingCartTerm";

const ShoppingCart = (props) => {
    const [items, setItems] = useState([]);
    const [totalCartPrice, setTotalCartPrie] = useState('');

    const [order, setOrder] = useState({});

    useEffect(() => {
        getShoppingCart();
    }, []);

    const getShoppingCart = () => {
        ShoppingCartService.getShoppingCartForLoggedInUser()
            .then((data) => {
                setItems(data.data.products);
                setTotalCartPrie(data.data.totalPrice);
                console.log(data.data)
            })
            .catch((error) => {
                console.error("Error fetching shopping cart items:", error);
            })
    }


    console.log(items)
    console.log(totalCartPrice)

    return (
        <>
            <div className="container">
                <p className="text-center my-5 fw-semibold fs-3">Example text</p>
                <hr style={{color: '#00ADB5'}}/>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="types">
                            <p className="text-center m-auto py-2">Product image</p>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-3">
                                <div className="types">
                                    <p className="text-center m-auto py-2">Name</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="types">
                                    <p className="text-center m-auto py-2">Price</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="types">
                                    <p className="text-center m-auto py-2">Quantity</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="types">
                                    <p class="text-center m-auto py-2">Total price</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                {items.length > 0 ? (
                    items.map((item) => (
                        <ShoppingCartTerm item={item}
                                          getShoppingCart={getShoppingCart}/>
                    ))
                ) : (
                    <div>There are no items</div>
                )}
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-9">
                        <div className="row justify-content-end">
                            <div className="col-3">
                                <div className="types">
                                    <p className="text-center m-auto py-2">Total order price</p>
                                </div>
                            </div>
                            <div className="col-3 d-flex">
                                <p className="text-center m-auto">${totalCartPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container ">
                <div className="row d-flex justify-content-end">
                    <div className="col-3 d-flex justify-content-end mt-3">
                        <a href={`{% url 'checkout' ${order.id} %}`} className="btn btn-success w-75 text-dark"
                           style={{backgroundColor: '#97FC7E', borderColor: '#97FC7E'}}>Checkout</a>
                    </div>
                </div>
                <div className="row d-flex justify-content-end">
                    <div className="col-3 d-flex justify-content-end mt-1">
                        <a className="btn btn-danger w-75"
                           href={`{% url 'delete_order' ${order.id} %}`}>Delete Order</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShoppingCart;
