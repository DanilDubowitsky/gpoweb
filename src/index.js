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

function addQuestion(id){
    if(id===1) {
        createdQuestions.push({question: "Вопрос 1", type: 'oneAns',answers:['adad','adwadawdf','ffrgththf','gtrgrhjtyh']});
    }
    else if(id ===2){
        createdQuestions.push({question:"Вопрос 2",type:'manyAns',answers:['adad','adwadawdf','ffrgththf','gtrgrhjtyh']});
    }
    else{
        createdQuestions.push({question:"Вопрос 3",type:'text'});
    }
    renderEntireTree();
}
function renderEntireTree() {
    ReactDOM.render(
        <React.StrictMode>
            <App coursesElements={coursesElements} tests={tests} questions={questions} addedQuestions={createdQuestions} addQuest={addQuestion}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
