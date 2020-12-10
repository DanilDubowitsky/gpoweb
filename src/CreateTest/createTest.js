import {NavBar} from "../NavBar/navbar";
import React, {useState} from "react";
import createCss from "./createTest.module.css"

import {func} from "prop-types";
import {render} from "react-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function CreateQuestion(id){

}


function ModalWindow(props){
    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Выберите вариант вопроса
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={createCss.modalButtonsDiv}>
                    <Button onClick={()=>CreateQuestion(1)}  className={createCss.modalBtn} variant={"primary"}>Один вариант ответа</Button>
                </div>
                <div className={createCss.modalButtonsDiv}>
                    <Button className={createCss.modalBtn} variant={"primary"}>Несколько вариантов</Button>
                </div>
                <div className={createCss.modalButtonsDiv}>
                    <Button className={createCss.modalBtn} variant={"primary"}>Свободный ответ</Button>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}





export const CreateTest = ({props}) =>{
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    return(
    <div>
        <NavBar/>
        <div className={createCss.createTestTxtDiv}>
            <span className={createCss.createTestTxt}>Создание теста</span>
        </div>
        <div className={createCss.btnCreateDiv}>
            <div>
                <Button onClick={handleShow} className={createCss.addQuestionBtn} variant={'primary'}>Добавить вопрос</Button>
                <div>
                    <ModalWindow show={show} onHide={()=>setShow(false)}/>
                </div>
            </div>
        </div>
    </div>
    )
}

