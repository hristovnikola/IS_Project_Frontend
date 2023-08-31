import "./Footer.css"
import {Link} from "react-router-dom";

const Footer = (props) => {
    return (
        <div className="footer-dark">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item text-center">
                            <h3>Services</h3>
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/products">Products</Link></li>
                                <li>Add Product</li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item text-center mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                            <h3>About</h3>
                            <ul>
                                <li><a href="https://www.facebook.com/nikola.hristov.7547" target="_blank">Facebook</a></li>
                                <li><a href="https://www.linkedin.com/in/nikola-hristov-729b01235/" target="_blank">Linkedin</a></li>
                                <li><a href="https://www.instagram.com/hristovnikola_/" target="_blank">Instagram</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text text-center mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                            <h3>Online PC Builder</h3>
                            <p>
                                Online PC Builder is a online shop on which you can make your dream PC. Simply just choose the components
                                you like, add them to your shopping cart and the rest is our job. We will built your PC in matter of days
                                and you will have it sooner then you think.
                            </p>
                        </div>
                    </div>
                    <p class="copyright">Online PC Builder © Nikola Hristov</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;