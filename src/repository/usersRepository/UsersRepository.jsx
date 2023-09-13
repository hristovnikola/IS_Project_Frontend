import axios from "../../axios/axios";

const UsersService = {

    getAllUsers: () => {
        return axios.get("/User");
    }

}

export default UsersService;