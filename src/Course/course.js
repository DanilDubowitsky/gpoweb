import React from "react";
import './course.css'
import {NavBar} from "../NavBar/navbar";

export const Course = () => {
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
                </div>
            </div>
        </div>
    )
}