import "./Home.css"
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AiOutlineCheckCircle} from "react-icons/ai";

const Home = (props) => {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid mb-5 h-auto">
                <div className="container text-center py-5">
                    <h1 className="text-white display-3">Building Your Dream PC</h1>
                    <div className="d-inline-flex align-items-center text-white">
                        <p className="m-0">
                            <a className="text-white text-decoration-none" href="/">
                                Building your own PC is a rewarding experience. With our new approach,
                                we'll help you be sure that the compatibility of your selected PC parts is just right.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5 about-us-div">
                <div className="container">
                    {/* About Us Section */}
                    <div className="row align-items-center">
                        <div className="col-lg-5 pb-4 pb-lg-0">
                            <img className="img-fluid w-100" src="https://assets2.razerzone.com/images/pnx.assets/1c9294a10ead0ef075575ecddb8318af/razer-tomahawk-cases-category-500x500.jpg" alt=""/>
                        </div>
                        <div className="col-lg-7">
                            <h4 className="text-primary text-center text-uppercase font-weight-bold about-us">About Us</h4>
                            <hr />
                            <p className="mb-4">
                                With us, your dreams will become reality. We have been doing this job for more than 25 years.
                                We have a lot of happy customers with very positive reviews. If you want to be one of them, just scroll down
                                the page and let's build your dream PC!
                            </p>
                            <p className="mb-4">
                                Finding the right PC part is now easier with us at PC Builder. We regularly check and list new components on our website,
                                so you'll always get the available and latest components without any hassle.
                            </p>
                            <p className="mb-4">
                                You can find our profiles on social media using the links below.
                            </p>
                            <div className="d-inline-flex align-items-center">
                                <a className="socials px-2" href="https://www.facebook.com/nikola.hristov.7547" target="_blank">
                                    <i className="fa-brands fa-facebook fa-2x"></i>
                                </a>
                                <a className="socials px-2" href="https://www.linkedin.com/in/nikola-hristov-729b01235/" target="_blank">
                                    <i className="fa-brands fa-linkedin fa-2x"></i>
                                </a>
                                <a className="socials px-2" href="https://www.instagram.com/hristovnikola_/" target="_blank">
                                    <i className="fa-brands fa-square-instagram fa-2x"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-secondary my-5 why-build">
                <div className="container">
                    {/* Why Build Section */}
                    <div className="row align-items-center">
                        <div className="col-lg-7 py-5 py-lg-0">
                            <h4 className="text-primary text-center text-uppercase font-weight-bold about-us">Why you should build a PC</h4>
                            <hr />
                            <p className="mb-4">
                                If you build your own computer, in most cases, it will cost you less than if you bought a prebuilt system from the store. You can also build a computer based on your specific wants and needs.
                            </p>
                            <div className="row">
                                <div className="col">
                                    <p className="mb-4">Top benefits of building a PC:</p>
                                    <ul className="list-inline">
                                        <li><h6><AiOutlineCheckCircle size={20} className={"text-primary "}/>Cheaper Long-Term</h6></li>
                                        <li><h6><AiOutlineCheckCircle size={20} className={"text-primary "}/>Easier to Fix</h6></li>
                                        <li><h6><AiOutlineCheckCircle size={20} className={"text-primary "}/>Better Overall Quality</h6></li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <p className="mb-4">Why choose us ?</p>
                                    <ul className="list-inline">
                                        <li><h6><AiOutlineCheckCircle size={20} className={"text-primary "}/>1000+ happy customers</h6></li>
                                        <li><h6><AiOutlineCheckCircle size={20} className={"text-primary "}/>2 years warranty</h6></li>
                                        <li><h6><AiOutlineCheckCircle size={20} className={"text-primary "}/>Refund on the product if the customer is not happy</h6></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-100">
                                <Link to={"/products"} className={"btn btn-primary mt-3 py-2 px-4 "}>Products</Link>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <img className="img-fluid w-100" src="https://china-gadgets.com/app/uploads/2021/08/Aukey_gaming-desk.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
