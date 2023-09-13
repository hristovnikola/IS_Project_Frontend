import './Users.css';
import {useEffect, useState} from "react";
import UsersService from "../../repository/usersRepository/UsersRepository";
import ImportUsersModal from "./ImportUsersModal/ImportUsersModal";

const Users = (props) => {

    const [users, setUsers] = useState([]);

    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = () => {
        UsersService.getAllUsers()
            .then((data) => {
                setUsers(data.data);
            })
    }

    const handleClosImportUsersModal = () => {
        setShowModal(false);
    }


    const ImportUsers = () => {
        setShowModal(true);
    }


    return (
        <div className={"container my-5"}>
            <ImportUsersModal showModal={showModal}
                              handleClose={handleClosImportUsersModal}
                              getAllUsers={getAllUsers}/>
            <button className={"btn btn-primary"} onClick={() => ImportUsers()}>Import users</button>
            <table className={"table user-table table-responsive table-borderless table-striped mb-1 mt-3"}>
                <thead className={"table-header-css"}>
                <tr className={"rounded-4"}>
                    <th scope={"col"}>User Id</th>
                    <th scope={"col"}>Username</th>
                    <th scope={"col"}>First name</th>
                    <th scope={"col"}>Last name</th>
                    <th scope={"col"}>Email</th>
                    {/*<th scope={"col"} className={"pe-4"}></th>*/}
                </tr>
                </thead>
                <tbody>
                {users.map((user) => {
                    let orderTotal = 0;

                    return (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            {/*<td>*/}
                            {/*    <button className={"btn btn-primary"} onClick={() => CreateInvoice(order.id)}>Create Invoice</button>*/}
                            {/*</td>*/}
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );


}

export default Users;