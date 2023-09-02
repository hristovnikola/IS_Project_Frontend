import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for routing
import './LoginPage.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const LoginPage = (props) => {
    return (
        <div>
            <Container id="loginRegisterForm">
                <h2 className="text-center">Log in</h2>
                <Row>
                    <Col xs={12}>
                        <hr style={{ color: '#00ADB5' }} />
                        <p>Please login to your account</p>
                        <Form method="post">
                            <Row>
                                <Col xs={12}>
                                    <Form.Control
                                        id="login_field"
                                        className="form-control mb-3"
                                        type="text"
                                        placeholder="Username"
                                        name="username"
                                        aria-label="readonly input example"
                                    />
                                </Col>
                                <Col xs={12}>
                                    <Form.Control
                                        id="password_field"
                                        className="form-control mb-3"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        aria-label="readonly input example"
                                    />
                                </Col>
                                <Col xs={12}>
                                    <Button id="log_in_button" className="btn btn-primary w-100 log_in_button">
                                        Log in
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                <div className="d-flex align-items-center justify-content-center mt-3">
                    <p className="me-2 mb-0">Don't have an account?</p>
                    <Link to="/register" className="btn btn-primary log_in_button py-1 px-4 me-3">
                        Register
                    </Link>
                </div>
            </Container>

            <div className="bottom_right">
                <Link className={"btn btn-primary mt-3 py-2 px-4 w-100"} to={"/home"}>
                    Back to the main page
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;
