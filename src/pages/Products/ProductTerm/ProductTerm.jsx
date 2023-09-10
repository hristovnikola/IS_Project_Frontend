import "./ProductTerm.css"
import "../ProductsList/ProductsList.css"
import ProductService from "../../../repository/productRepository/ProductRepository";
import swal from "sweetalert";
import {useState} from "react";
import AddEditProductModal from "../AddEditProductModal/AddEditProductModal";
import ShoppingCartService from "../../../repository/shoppingCartRepository/ShoppingCartRepository";
import Swal from 'sweetalert2';
import {Link, Navigate} from "react-router-dom";
import {useShoppingCart} from "../../../ShoppingCartContext";

const ProductTerm = (props) => {

    const [selectedProductForEdit, setSelectedProductForEdit] = useState({});

    const [showEditModal, setShowEditModal] = useState(false);

    const { updateCartItems } = useShoppingCart();

    const getNumberOfItemsInCart = () => {
        ShoppingCartService.getShoppingCartForLoggedInUser()
            .then((data) => {
                updateCartItems((data.data.products).length);
                console.log("Data after add", data.data.products.length);
            })
    }

    const handleShowEditProductModal = () => {
        setShowEditModal(true);
    }

    const handleCloseEditProductModal = () => {
        setSelectedProductForEdit({});
        setShowEditModal(false);
    }

    const deletedSuccesfullyAlert = () => {
        Swal.fire({
            icon: 'success',
            title: 'Product deleted sucessfuly',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }


    const addToCartSucessful = (product) => {
        Swal.fire({
            title: product.name + ' added to cart!',
            imageUrl: product.imagePath,
            imageWidth: 400,
            imageAlt: 'Custom image',
            confirmButtonText: "Continue shopping!"
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

    const deleteProduct = (id) => {
        ProductService.deleteProduct(id)
            .then(() => {
                deletedSuccesfullyAlert();
                props.getProducts();
                props.handleClose();
            }).catch(() => {
            errorAlert();
        })
    }

    const ConfirmationDelete = (id) => {
        Swal.fire({
            title: "Do you really want to delete this item?",
            icon: "warning",
            showCloseButton: true,
            showCancelButton: true,
            dangerMode: true,
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(id)
            }
        })
    }

    const AddToCart = (product) => {
        ShoppingCartService.addProductInShoppingCart(product.id)
            .then(() => {
                addToCartSucessful(product);
                getNumberOfItemsInCart();
            });
    }

    return (
        <div className={`card-col col-lg-4 col-md-6 px-2 cursor-pointer`}
             key={props.key}>
            <AddEditProductModal showModal={showEditModal}
                                 handleClose={handleCloseEditProductModal}
                                 selectedProductForEdit={selectedProductForEdit}
                                 getProducts={props.getProducts}
            />
            <div className={`mt-4 shadow-sm event-card`}
                // onClick={handleCardClick}
            >
                <div className="card-image">
                    <img
                        // src="https://desktime.com/blog/wp-content/uploads/2021/08/meeting.png"
                        src={props.product.imagePath}
                        alt="Product"
                    />
                </div>
                <div className="p-3">
                    <h4 className="bold-text ">{props.product.name}</h4>
                    <p>{props.product.description}</p>
                </div>
                <div className={"bottom-content"}>
                    <div className="bottom-content p-3">
                        <div className="d-flex">
                            <div>
                                <span
                                    className={"mt-1 justify-content-center badge px-3 py-2 text-white rounded-4 capacity"}>
                                $ {props.product.price}
                            </span>
                            </div>
                            <div className={"d-flex ms-auto"}>
                                <a className={"btn btn-info rounded-4 me-2"}
                                    onClick={() => AddToCart(props.product)}
                                >Add to cart</a>
                                <a className={"btn btn-success rounded-4  me-2"}
                                   onClick={() => {
                                       setSelectedProductForEdit(props.product);
                                       handleShowEditProductModal();
                                   }}
                                >Edit</a>
                                <a className={"btn btn-danger rounded-4 "}
                                   onClick={() => ConfirmationDelete(props.product.id)}
                                >Delete</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductTerm;