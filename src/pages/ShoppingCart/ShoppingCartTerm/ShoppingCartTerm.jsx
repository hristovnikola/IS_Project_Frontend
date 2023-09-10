import {BiSolidDownArrow, BiSolidUpArrow} from "react-icons/bi";
import Swal from "sweetalert2";
import ShoppingCartService from "../../../repository/shoppingCartRepository/ShoppingCartRepository";
import swal from "sweetalert";

const ShoppingCartTerm = (props) => {

    const deletedSuccesfullyAlert = () => {
        Swal.fire({
            icon: 'success',
            title: 'Product deleted sucessfuly',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }

    const errorAlert = () => {
        swal({
            title: "Something went wrong",
            icon: "error",
            dangerMode: true
        }).then((willDelete) => {
            if (willDelete) {
            }
        })
    }

    const deleteProductFromCart = (id) => {
        ShoppingCartService.deleteProductFromShoppingCart(id)
            .then(() => {
                deletedSuccesfullyAlert();
                props.getShoppingCart();
            }).catch(() => {
            errorAlert();
        })
    }

    const ConfirmationDelete = (id) => {
        Swal.fire({
            title: "Do you really want to delete this item from the shopping cart?",
            icon: "warning",
            showCloseButton: true,
            showCancelButton: true,
            dangerMode: true,
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProductFromCart(id)
            }
        })
    }

    const increaseQuantity = (id) => {
        ShoppingCartService.increaseQuantityForProduct(id)
            .then(() => {
                props.getShoppingCart();
            })
    }

    const decreaseQuantity = (id) => {
        ShoppingCartService.decreaseQuantityForProduct(id)
            .then(() => {
                props.getShoppingCart();
            })
    }

    return(
        <div className="row mt-5" key={props.item.id}>
            <div className="col-3">
                <div className="row">
                    <div className="col-12">
                        <img className="w-100 rounded-3" src={props.item.imagePath} alt=""/>
                    </div>
                </div>
            </div>
            <div className="col-9">
                <div className="row h-100 d-flex justify-content-center align-items-center p-0">
                    <div className="col-3">
                        <p className="text-center m-auto">{props.item.name}</p>
                    </div>
                    <div className="col-3">
                        <p className="text-center m-auto py-2">${props.item.price}</p>
                    </div>
                    <div className="col-3 d-flex justify-content-center">
                        <p className="text-center mt-auto mb-auto mx-3 py-2 item_quantity">{props.item.quantity}</p>
                        <div className="d-flex flex-column quantity mt-auto mb-auto">
                            <BiSolidUpArrow onClick={() => {
                                increaseQuantity(props.item.productId)
                            }}/>
                            <BiSolidDownArrow onClick={() => {
                                decreaseQuantity(props.item.productId);
                            }}/>
                        </div>
                    </div>
                    <div className="col-3 d-flex">
                        <p className="text-center m-auto">${props.item.totalPrice}</p>
                        <a className="btn btn-danger btn-sm delete_cart_item"
                           onClick={() => {
                               ConfirmationDelete(props.item.productId);
                           }}>Delete Item</a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ShoppingCartTerm;