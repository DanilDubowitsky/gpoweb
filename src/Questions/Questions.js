import React from "react";
import {NavBar} from "../NavBar/navbar";
import ques from "./questions.module.css"
import {CheckBox, RadioButtonChecked} from "@material-ui/icons";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";


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
            </FormGroup>
        </div>
    )
}

export const Questions = (props) =>{
    let testQuestion = [];
    props.questions.map((q,index)=>{
        if(q.type === 'oneAns')
            testQuestion.push(<OneAnswer key={index} quest={q}/>)
        else if(q.type === 'text'){
            testQuestion.push(<TextAnswer key={index} quest={q}/>);
        }
        else{
            testQuestion.push(<ManyAnswers key={index} quest={q}/>);
        }

        }
    )


    /*for(let i = 0;i<props.questions.length;i++){
        if(props.questions[i].type === 'oneAns'){
            testQuestion.push(<OneAnswer key={i} quest={props.questions[i]} />);
        }
         else if(props.questions[i].type === 'text'){
            testQuestion.push(<TextAnswer key={i} quest={props.questions[i]}/>);
        }
        else{
            testQuestion.push(<ManyAnswers key={i} quest={props.questions[i]}/>);
        }
    }*/

    return(
        <div className={ques.backgroundQuestions}>
            <NavBar/>
            <div >
                
                {testQuestion}
            </div>
        </div>
    )
}