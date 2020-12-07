import React from "react";
import './course.css'
import {NavBar} from "../NavBar/navbar";
import Button from "@material-ui/core/Button";
const TestCard = (props) =>{
    let card = props.test.map((test)=>
        <div className={'testCard'}>
            <div>
                <span className={'name-test'}>{test.name}</span>
            </div>
            <div className={'div-with-img'}>
                <img className={'receipt'} src={require('../images/receipt.png')}/>
                <span className={'do-test-txt'}>Пройти тест {test.desc} </span>
            </div>
            <div>
                <img src={require('../images/line.png')}/>
            </div>
        </div>
    )
    return(
        <div>{card}</div>
    )
}
const CreateTestButton = ()=>{
    return(
        <Button className={'btn-create'} variant="contained" color="primary" disableElevation>
           Создать тест
        </Button>
    )
}


export const Course = (props) => {
    return (
        <div className={'content'}>
            <div className={'nav-bar-div'}>
                <NavBar/>
            </div>
            <div className={'my-courses-cards'}>
                <div className={'cards'}>
                    <div>
                <span className={'my-courses-txt'}>
                    Тестирование по дисциплине "Метрология и технические измерения" (11.03.03, 09.03.01, 20.03.01)
                </span>
                    </div>
                    <div>
                        <img src={require('../images/line.png')}/>
                    </div>
                    <CreateTestButton/>
                    <TestCard test = {props.tests}/>
                </div>
            </div>
        </div>
    )
}