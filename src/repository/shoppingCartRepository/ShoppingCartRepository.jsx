import axios from "../../axios/axios";

const ShoppingCartService = {

    getShoppingCartForLoggedInUser: () => {
        return axios.get("/ShoppingCart/shopping-cart-info");
    },

    addProductInShoppingCart: (id) => {
        return axios.post("/Products/add-to-shopping-cart", {
            selectedProductId: id,
            quantity: 1
        })
    },

    deleteProductFromShoppingCart: (id) => {
        return axios.delete(`/ShoppingCart/remove-product/${id}`);
    },

    increaseQuantityForProduct: (id) => {
        return axios.post(`/ShoppingCart/increase-quantity/${id}`);
    },

    decreaseQuantityForProduct: (id) => {
        return axios.post(`/ShoppingCart/decrease-quantity/${id}`);
    },
}

export default ShoppingCartService;