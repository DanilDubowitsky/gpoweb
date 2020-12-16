import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {func} from "prop-types";
let coursesElements = [{
    name:'Метрология',
    teacher: 'Учитель 1'
},{name: 'ОБЖ',teacher: 'Учитель 2'},{name: 'Коммуникационные сети', teacher: 'Учитель 3'}];

let tests = [{name: 'Контрольная работа № 1', desc: 'Измерения'},{name: 'Контрольная работа № 2', desc: 'Измерительные приборы'},
    {name: 'Контрольная работа № 3', desc: 'Погрешности'}]

let questions = [{id: 0,type: 'oneAns', question:'Вопрос 1 adadawdad',answers:['adad','adwadawdf','ffrgththf','gtrgrhjtyh']},
    {id: 1,type:'text',question: 'Вопрос 2 gjgjehuerhuddzcxvm'},
    {id: 1,type:'text',question: 'Вопрос 6 asggfhhft'},
    {id: 2,type:'manyAns',question: 'Вопрос 3 fghtyjtyjtyjtyjt',answers:['adad','adwadawdf','ffrgththf','gtrgrhjtyh']},
    {id: 3,type: 'oneAns', question:'Вопрос 4 adadawdad',answers:['adad','adwadawdf','ffrgththf','gtrgrhjtyh']}
]
let createdQuestions = [

]

function onDelete(id){
    createdQuestions.splice(id,1);
    renderEntireTree();
}

function onDeleteAns(id,index){
    createdQuestions[id].answers.splice(index, 1);
    debugger;
    if(createdQuestions[id].type==='manyAns') {
        createdQuestions[id].trueAns.splice(index,1);
    }
    renderEntireTree();
}

function onChangeCheck(id,index){
    if(createdQuestions[id].type === 'manyAns') {
        createdQuestions[id].trueAns[index] = !createdQuestions[id].trueAns[index];
    }
    else{
        for(let i=0;i<createdQuestions[id].trueAns.length;i++){
            createdQuestions[id].trueAns[i] = false;
        }
        createdQuestions[id].trueAns[index] = true;
    }

    renderEntireTree();
}

function logTest(){
    console.log(createdQuestions);
}

function onChangeInputValue(id,index,inputValue){
    if(createdQuestions[id].type==='oneAns') {

        if(index!==null) {

            createdQuestions[id].answers[index] = inputValue;
        }
        else{

            createdQuestions[id].question = inputValue;
        }
    }
    else if(createdQuestions[id].type ==='manyAns'){
        if(index!==null) {
            createdQuestions[id].answers[index] = inputValue;

        }
        else{
            createdQuestions[id].question = inputValue;

        }
    }
    else{
        if(index === null) {
            createdQuestions[id].question = inputValue;
            debugger
        }
        else{
            createdQuestions[id].answer = inputValue;
            debugger
        }
    }
    renderEntireTree();
}

function addQuestion(id){
    if(id===1) {
        createdQuestions.push({question: "", type: 'oneAns',answers:['',''],trueAns:[false,false]});
    }
    else if(id ===2){
        createdQuestions.push({question:"",type:'manyAns',answers:['',''],trueAns: [false,false]});
    }
    else{
        createdQuestions.push({question:"",type:'text',answer:''});
    }
    renderEntireTree();
}
function addAns(id){
    if(createdQuestions[id].answers.length < 7) {
        createdQuestions[id].answers.push(' ');
        createdQuestions[id].trueAns.push(false);
        renderEntireTree();
    }
}
export function renderEntireTree() {
    ReactDOM.render(
        <React.StrictMode>
            <App
                logCreatedTest={logTest}
                onChangeCheck={onChangeCheck}
                onChangeInputValue={onChangeInputValue}
                deleteAns={onDeleteAns}
                addAns={addAns}
                 deleteQues={onDelete}
                 coursesElements={coursesElements}
                 tests={tests} questions={questions}
                 addedQuestions={createdQuestions}
                 addQuest={addQuestion}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
