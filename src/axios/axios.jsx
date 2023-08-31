import axios from "axios";

const instance = axios.create({
    baseURL: "https://localhost:7051/api",
});

export default instance;
