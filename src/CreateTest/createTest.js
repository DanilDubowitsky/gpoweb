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
import createTestM from "../CreateTest/createTest.module.css"

const TextAnswer = (props)=>{
    let textAns = React.createRef();
    let txtQues = React.createRef();
    let answ = (<div className={ques.questionContent}>
        <div className={ques.questionTxt}>
            <input ref={txtQues} onChange={()=>props.onInputChange(props.id,null,txtQues.current.value)}  value={props.quest.question} placeholder={'Введите вопрос'}  type={'text'}></input>
        </div>
        <input type={'text'} ref={textAns} onChange={()=>props.onInputChange(props.id,0,textAns.current.value)}/>
    </div>)
    return(
        <div  className={ques.cardQues}>
            {answ}
            <div>
                <div className={createTestM.controlElements}>
                    <div>
                        <img onClick={()=>props.onDeleteQuestion(props.id)}
                             src={require('../images/remove.svg')}
                             width={'35px'}
                             height={'35px'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const OneAnswer = (props) =>{

    let text = React.createRef();
    let textQuestion =[0,0,0,0,0,0];
    let answrs =[];
        props.quest.answers.map((ans,index) => {
            textQuestion[index] = React.createRef();
            if(props.quest.trueAns[index]) {
                answrs.push(
                    <div key={index}>
                        <FormControlLabel value={ans}
                                          control={<Radio checked={true}
                                                          onChange={() => props.onCgangeCheck(props.id, index)}
                                                          key={index}
                                                          color={"primary"}/>}/>
                        <input value={props.quest.answers[index]} ref={textQuestion[index]} onChange={() => props.onChangeValue(props.id, index, textQuestion[index].current.value)}
                               type={'text'}/>
                        <img onClick={() => props.onDeleteAns(props.id, index)} src={require('../images/remove.svg')}
                             width={'35px'}
                             height={'35px'}/>
                    </div>
                )
            }
            else{
                answrs.push(
                    <div key={index}>
                        <FormControlLabel value={ans}
                                          control={<Radio checked={false}
                                                          onChange={() => props.onCgangeCheck(props.id, index)}
                                                          key={index}
                                                          color={"primary"}/>}/>
                        <input value={props.quest.answers[index]} ref={textQuestion[index]} onChange={() => props.onChangeValue(props.id, index, textQuestion[index].current.value)}
                               type={'text'}/>
                        <img onClick={() => props.onDeleteAns(props.id, index)} src={require('../images/remove.svg')}
                             width={'35px'}
                             height={'35px'}/>
                    </div>
                )
            }
        }
    )
    return(
        <div  className={ques.cardQues}>
            <div className={ques.questionTxt}>
                <input value={props.quest.question} ref={text} placeholder={'Введите вопрос'} onChange={()=>props.onChangeValue(props.id,null,text.current.value)}  type={'text'}/>
            </div>
            <RadioGroup className={ques.questionContent} aria-label="gender" name="gender1">
                {answrs}
            </RadioGroup>
            <div className={createTestM.controlElements}>
                <div>
                    <Button onClick={()=>props.onAddAnswer(props.id)} variant={'primary'}>Добавить ответ</Button>
                </div>
                <div>
                    <img onClick={()=>props.onDeleteQuestion(props.id)} src={require('../images/remove.svg')} width={'35px'} height={'35px'}/>
                </div>
            </div>
        </div>
    )
}


const ManyAnswers = (props) => {
    let value = React.createRef();
    let answTxt = [0,0,0,0,0,0]
    let answrs = [];

        props.quest.answers.map((ans,index) => {
            answTxt[index] = React.createRef();
            answrs.push(<div id={index} key={index}>
                <FormControlLabel
                    control={<Checkbox checked={props.quest.trueAns[index]}
                                       onChange={() => props.onCgangeCheck(props.id, index)} color={"primary"}
                                       name="gilad"/>}
                />
                <input value={props.quest.answers[index]} ref={answTxt[index]}
                       onChange={() => props.onChangeValue(props.id, index, answTxt[index].current.value)} type={'text'}/>
                <img onClick={() => props.onDeleteAns(props.id, index)} src={require('../images/remove.svg')}
                     width={'35px'} height={'35px'}/>
            </div>)
        }
    )
    return(
        <div className={ques.cardQues}>
            <div className={ques.questionTxt}>
                <input value={props.quest.question} ref={value} placeholder={'Введите вопрос'} onChange={()=>props.onChangeValue(props.id,null,value.current.value)}  type={'text'}/>
            </div>
            <FormGroup className={ques.questionContent}>
                {answrs}
            </FormGroup>
            <div className={createTestM.controlElements}>
                <div>
                    <Button onClick={()=>props.onAddAnswer(props.id)} variant={'primary'}>Добавить ответ</Button>
                </div>
                <div>
                    <img onClick={()=>props.onDeleteQuestion(props.id)} src={require('../images/remove.svg')} width={'35px'} height={'35px'}/>
                </div>
            </div>
        </div>
    )
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
    props.addedQuestions.map((an,index)=> {
        if (an.type === 'oneAns') {
            addedQuestions.push(<OneAnswer onDeleteQuestion={props.onDeleteQues}
                                           id={index} key={index}
                                           quest={an}
                                           onAddAnswer={props.onAddAns}
                                           onDeleteAns={props.onDeleteAns}
                                           onChangeValue={props.onChangeInput}
                                           onCgangeCheck={props.onChangeCheck}
            />);
        } else if (an.type === 'manyAns') {
            addedQuestions.push(<ManyAnswers onDeleteQuestion={props.onDeleteQues}
                                             id={index}
                                             key={index}
                                             quest={an}
                                             onAddAnswer={props.onAddAns}
                                             onDeleteAns={props.onDeleteAns}
                                             onChangeValue={props.onChangeInput}
                                             onCgangeCheck={props.onChangeCheck}
            />);
        } else {
            addedQuestions.push(<TextAnswer onDeleteQuestion={props.onDeleteQues}
                                            id={index}
                                            key={index}
                                            quest={an}
                                            onInputChange={props.onChangeInput}
            />);
        }
    })

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
                            <Button className={createCss.createTestBtn} onClick={()=>props.logTest()} type={'primary'}>Создать тест</Button>
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
                            <Button className={createCss.createTestBtn} onClick={()=>props.logTest()} type={'primary'}>Создать тест</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

