import React from "react";
import './startpage.css'
import {NavBar} from "../NavBar/navbar";
export const StartPage = () =>{
    return(
        <div>
            <NavBar/>
            <div className={'container-start-page'}>
                <div className={'name-test-start'}>
                    <span>Проверка готовности к самостоятельной работе со средствами измерения</span>
                </div>
                <div className={'type-test-div'}>
                     <span>Данное тестирование является тренировочным вариантом</span>
                </div>
                <div className={'type-test-div'}>
                    <span>У вас бесконечно попыток пройти данный тест</span>
                </div>
                <div className={'button-div-start'}>
                    <button className={'start-test-btn'}>Начать тестирование</button>
                </div>
                <div className={'warning-start'}>
                    <span>Помните, если вы переключитесь на другую страницу Ваше тестирование закончится автоматически. </span>
                </div>
            </div>
        </div>
    )
}