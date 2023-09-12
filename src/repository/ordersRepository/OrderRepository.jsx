import axios from "../../axios/axios";

const OrderService = {

    getAllOrders: () => {
        return axios.get("/Order/getAllOrders");
    },

    createInvoice: (id) => {
        return axios.post(`/Order/createInvoice/${id}`);
    }

}

export default OrderService;