import "./ShoppingCart.css";
import {useState} from "react";

const ShoppingCart = (props) => {
    const [items, setItems] = useState([]);

    const [order, setOrder] = useState({});

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
                            <p className="text-center m-auto py-2">Product image and name</p>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-3">
                                <div className="types">
                                    <p className="text-center m-auto py-2">Price</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="types">
                                    <p className="text-center m-auto py-2">Size</p>
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
                        <div className="row mt-5" key={item.id}>
                            <div className="col-3">
                                <div className="row">
                                    <div className="col-6">
                                        <img className="w-100" src={item.product.imageURL} alt=""/>
                                    </div>
                                    <div className="col-6 d-flex">
                                        <p className="text-center m-auto">{item.product.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="row h-100 d-flex justify-content-center align-items-center p-0">
                                    <div className="col-3">
                                        <p className="text-center m-auto py-2">${item.product.price}</p>
                                    </div>
                                    <div className="col-3">
                                        <p className="text-center m-auto py-2">{item.selected_size}</p>
                                    </div>
                                    <div className="col-3 d-flex justify-content-center">
                                        <p className="text-center mt-auto mb-auto mx-3 py-2 item_quantity">{item.quantity}</p>
                                        <div className="quantity mt-auto mb-auto">
                                            <a className="inc_button" href={`{% url 'increase_quantity' ${item.id} %}`}><img
                                                className="chg-quantity inc"
                                                src={`{% static  'images/arrow-up.png' %}`}
                                                alt=""/></a>
                                            <a className="dec_button" href={`{% url 'decrease_quantity' ${item.id} %}`}><img
                                                className="chg-quantity dec"
                                                src={`{% static  'images/arrow-down.png' %}`}
                                                alt=""/></a>
                                        </div>
                                    </div>
                                    <div className="col-3 d-flex">
                                        <p className="text-center m-auto">${item.get_total}</p>
                                        <a className="btn btn-danger btn-sm delete_cart_item"
                                           href={`{% url 'delete_item' ${item.id} %}`}>Delete Item</a>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                <p className="text-center m-auto">${order.get_cart_total}</p>
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
