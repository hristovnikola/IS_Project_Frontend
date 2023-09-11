import React, {useContext, useEffect, useState} from 'react';
import {BiLogoFacebookCircle, BiSolidHome, BiSolidPurchaseTag} from "react-icons/bi";
import {BsFacebook, BsFillCartFill, BsInstagram, BsLinkedin} from "react-icons/bs";
import {FaFacebook} from "react-icons/fa";
import {Button, Nav, Navbar} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {MdEmail} from "react-icons/md";
import jwt from 'jwt-decode';
import ShoppingCartService from "../../../repository/shoppingCartRepository/ShoppingCartRepository";
import {TbLogin, TbLogout2} from "react-icons/tb";
import {ShoppingCartContext} from "../../../ShoppingCartContext";

const Header = (props) => {

    const {cartItems, updateCartItems} = useContext(ShoppingCartContext);

    useEffect(() => {
        if (token) {
            getNumberOfItemsInCart();
        }
    }, [])

    const getNumberOfItemsInCart = () => {
        ShoppingCartService.getShoppingCartForLoggedInUser()
            .then((data) => {
                updateCartItems((data.data.products).length)
            })
    }

    console.log("Num of cart items: ", cartItems);

    const token = localStorage.getItem('auth_token');
    let username = null;
    if (token) {
        const decoded_token = jwt(token);
        console.log(decoded_token);
        username = decoded_token['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    }

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('auth_token');
        navigate('/home');
    }


    return (
        <>
            <div className="container-fluid topbar" style={{background: '#0a324f'}}>
                <div className="row py-2 px-lg-5">
                    <div className="col-lg-6 text-center text-lg-start mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center text-white">
                            <small className={"d-inline-flex align-items-center"}>
                                <span className={"d-flex align-items-center"}>
                                    <MdEmail/>
                                </span>
                                <div className={"ms-2"}> nikola.hristov@students.finki.ukim.mk
                                </div>
                            </small>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center align-items-center text-lg-end">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-white px-2" href="https://www.facebook.com/nikola.hristov.7547"
                               target="_blank" rel="noopener noreferrer">
                            <span className={"d-flex align-items-center"}>
                                <BsFacebook/>
                            </span>
                            </a>
                            <a className="text-white px-2 mt-auto mb-auto"
                               href="https://www.linkedin.com/in/nikola-hristov-729b01235/" target="_blank"
                               rel="noopener noreferrer">
                            <span className={"d-flex align-items-center"}>
                                <BsLinkedin/>
                            </span>
                            </a>
                            <a className="text-white px-2" href="https://www.instagram.com/hristovnikola_/"
                               target="_blank" rel="noopener noreferrer">
                            <span className={"d-flex align-items-center"}>
                                <BsInstagram/>
                            </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <header className="header sticky-top">
                <Navbar collapseOnSelect expand="lg"
                        className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
                    <div className="container-fluid p-2">
                        <h1 className="heading" style={{color: '#0a324f'}}>Online Pc Builder</h1>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto mb-2 mb-lg-0">
                                <Nav.Link as={Link} to="/home">
                                    <div className="d-flex">
                                        <span className="me-1">Home</span>
                                        <span className="d-flex mt-auto mb-auto">
                                            <BiSolidHome/>
                                         </span>
                                    </div>
                                </Nav.Link>
                                <Nav.Link as={Link} to="/products">
                                    <div className="d-flex">
                                        <span className="me-1">Products</span>
                                        <span className="d-flex mt-auto mb-auto">
                                          <BiSolidHome/>
                                        </span>
                                    </div>
                                </Nav.Link>
                                <Nav.Link as={Link} to="/orders">
                                    <div className="d-flex">
                                        <span className="me-1">Orders</span>
                                        <span className="d-flex mt-auto mb-auto">
                                          <BiSolidPurchaseTag/>
                                        </span>
                                    </div>
                                </Nav.Link>

                                {/*<Nav.Link href="#">Add Product</Nav.Link>*/}
                                {/*<Nav.Link href="#">Add Pc</Nav.Link>*/}
                                {/*<Nav.Link href="#">Add To Role</Nav.Link>*/}
                            </Nav>
                            <Nav>
                                <Nav.Link className={"mt-auto mb-auto"} as={Link} to="/cart">
                                    {token && (
                                        <div className={"d-flex align-items-center rounded-3 bg-info px-3 py-2"}>
                                            <>
                                                <BsFillCartFill size={25}/>
                                                {cartItems > 0 ? (
                                                    <div className="ms-1">{cartItems} items</div>
                                                ) : (
                                                    <div className="ms-1">Cart is empty</div>
                                                )}
                                            </>
                                        </div>
                                    )}
                                </Nav.Link>
                            </Nav>
                            <Nav>
                                {!username && <Button as={Link} to="/login" href="#">Login<TbLogout2 size={20}
                                                                                                     className={"mt-auto mb-auto ms-1"}/></Button>}
                                {username && <><span className={"mt-auto mb-auto me-2"}>Logged in as: <b>{username}</b></span>
                                    <Button onClick={handleLogout}>Logout<TbLogout2 size={20}
                                                                                    className={"mt-auto mb-auto ms-1"}/></Button></>}
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </header>
        </>

    );
}

export default Header;
