import "./ProductTerm.css"
import "../ProductsList/ProductsList.css"
import ProductService from "../../../repository/productRepository/ProductRepository";
import swal from "sweetalert";
import {useState} from "react";
import AddEditProductModal from "../AddEditProductModal/AddEditProductModal";

const ProductTerm = (props) => {

    const [selectedProductForEdit, setSelectedProductForEdit] = useState({});

    const [showEditModal, setShowEditModal] = useState(false);

    const handleShowEditProductModal = () => {
        setShowEditModal(true);
    }

    const handleCloseEditProductModal = () => {
        setSelectedProductForEdit({});
        setShowEditModal(false);
    }

    const deletedSuccesfullyAlert = () => {
        swal("Product deleted successfully", {
            icon: "success",
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
        swal({
            title: "Do you really want to delete this item?",
            icon: "warning",
            buttons: ["Cancel", "Ok"],
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                deleteProduct(id);
            }
        })
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
                                {props.product.price}
                            </span>
                            </div>
                            <div className={"d-flex ms-auto"}>
                                <a className={"btn btn-info rounded-4  me-2"}>Details</a>
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