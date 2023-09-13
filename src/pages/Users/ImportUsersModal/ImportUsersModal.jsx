import './ImportUsersModal.css'
import {Col, Form, Modal, ModalBody, ModalFooter, Row} from "react-bootstrap";
import React, {useRef, useState} from "react";
import {BsCloudUploadFill} from "react-icons/bs";

const ImportUsersModal = (props) => {

    const [file, setFile] = useState({});

    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef(null);

    const handleChangeFile = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0])
        }
    };

    const handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0])
        }
    };

    const handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    }

    const handleFileSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Modal show={props.showModal} onHide={props.handleClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Import users with drag and drop</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleFileSubmit}>
                <ModalBody>
                    <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                        <Form.Label className={"d-flex"}>
                            Select document
                        </Form.Label>
                        <div id="form-file-upload w-75" onDragEnter={handleDrag}>
                            <input ref={inputRef} type="file" id="input-file-upload"
                                   onChange={handleChangeFile}/>
                            <label id="label-file-upload" htmlFor="input-file-upload"
                                   className={dragActive ? "drag-active" : ""}>
                                <div className={"text-center pb-4 pt-4"}>
                                    <p>Drag and drop your files here</p>
                                    <div
                                        className="upload-button mx-auto d-flex align-items-center justify-content-center text-center "><span
                                        className={"me-2"}>Upload file</span> <BsCloudUploadFill/></div>

                                    <div>{file.name}</div>
                                </div>
                            </label>
                            {dragActive &&
                                <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag}
                                     onDragOver={handleDrag} onDrop={handleDrop}></div>}
                        </div>

                        {/*<span className={"mx-2"}>{file?.name}</span>*/}
                        {/*<input type="file" name="file" id="chooseDocument" className={"add_documents_input"}*/}
                        {/*       onChange={handleFile}/>*/}
                    </Form.Group>
                </ModalBody>
                <ModalFooter>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </ModalFooter>
            </Form>
        </Modal>
    )
}

export default ImportUsersModal;