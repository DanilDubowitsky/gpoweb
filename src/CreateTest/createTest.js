import {NavBar} from "../NavBar/navbar";
import React, {useState} from "react";
import createCss from "./createTest.module.css"

import {func} from "prop-types";
import {render} from "react-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ques from "../Questions/questions.module.css";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";

const TextAnswer = (props)=>{

    let answ = (<div className={ques.questionContent}>
        <div className={ques.questionTxt}>
            <span className={ques.questionTxt}>{props.quest.question}</span>
        </div>
        <TextField id="standard-basic" label="Ответ" />
    </div>)
    return(
        <div  className={ques.cardQues}>
            {answ}
            <div>

            </div>
        </div>
    )
}

const OneAnswer = (props) =>{

    let answrs = props.quest.answers.map((ans,index) =>
        <FormControlLabel key={index} value={ans} control={<Radio key={index} color={"primary"} />} label={ans} />
    )
    return(
        <div   className={ques.cardQues}>
            <div className={ques.questionTxt}>
                <span className={ques.questionTxt}>{props.quest.question}</span>
            </div>
            <RadioGroup className={ques.questionContent} aria-label="gender" name="gender1">
                {answrs}
            </RadioGroup>
            <Button variant={'primary'}>Добавить ответ</Button>
        </div>
    )
}


const ManyAnswers = (props) => {

    let answrs = props.quest.answers.map((ans,index) => <FormControlLabel
            key={index}
            control={<Checkbox  color={"primary"}  name="gilad" />}
            label={ans}
        />
    )
    return(
        <div className={ques.cardQues}>
            <div className={ques.questionTxt}>
                <span className={ques.questionTxt}>{props.quest.question}</span>
            </div>
            <FormGroup className={ques.questionContent}>
                {answrs}
                <Button variant={'primary'}>Добавить ответ</Button>
            </FormGroup>
        </div>
    )
}




function ModalWindow(props,{addquestion}){
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
                    <Button onClick={()=>props.addQuestion(1)}  className={createCss.modalBtn} variant={"primary"}>Один вариант ответа</Button>
                </div>
                <div className={createCss.modalButtonsDiv}>
                    <Button onClick={()=>props.addQuestion(2)} className={createCss.modalBtn} variant={"primary"}>Несколько вариантов</Button>
                </div>
                <div className={createCss.modalButtonsDiv}>
                    <Button onClick={()=>props.addQuestion(3)} className={createCss.modalBtn} variant={"primary"}>Свободный ответ</Button>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export const CreateTest = (props) =>{
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let addedQuestions = [];
    for(let i=0;i<props.addedQuestions.length;i++){
        if(props.addedQuestions[i].type === 'oneAns'){
            addedQuestions.push(<OneAnswer key={i} quest={props.addedQuestions[i]} />);
        }
        else if(props.addedQuestions[i].type === 'manyAns'){
            addedQuestions.push(<ManyAnswers key={i} quest={props.addedQuestions[i]}/>);
        }
        else{
            addedQuestions.push(<TextAnswer key={i} quest={props.addedQuestions[i]}/>);
        }
    }
    if(addedQuestions.length !==0) {
        return (
            <div>
                <NavBar/>
                <div className={createCss.createTestTxtDiv}>
                    <span className={createCss.createTestTxt}>Создание теста</span>
                </div>
                <div className={createCss.btnCreateDiv}>
                    <div>
                        <Button onClick={handleShow} className={createCss.addQuestionBtn} variant={'primary'}>Добавить
                            вопрос</Button>
                        <div>
                            {addedQuestions}
                            <ModalWindow addQuestion={props.addQuestion} show={show} onHide={() => setShow(false)}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div>
                <NavBar/>
                <div className={createCss.createTestTxtDiv}>
                    <span className={createCss.createTestTxt}>Создание теста</span>
                </div>
                <div className={createCss.btnCreateDiv}>
                    <div>
                        <Button onClick={handleShow} className={createCss.addQuestionBtn} variant={'primary'}>Добавить
                            вопрос</Button>
                        <div>
                            {addedQuestions}
                            <ModalWindow addQuestion={props.addQuestion} show={show} onHide={() => setShow(false)}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

