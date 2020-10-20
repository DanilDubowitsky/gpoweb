import React from "react";
import {NavBar} from "../NavBar/navbar";
import './courses.css'

export const MyCourses = () => {
    return (
        <div className={'content'}>
            <div className={'nav-bar-div'}>
                <NavBar/>
            </div>
            <div className={'my-courses-cards'}>
                <div className={'cards'}>
                    <div>
                <span className={'my-courses-txt'}>
                    Мои курсы
                </span>
                    </div>
                    <div>
                        <img src={require('../images/line.png')}/>
                    </div>
                    <div className={'card-course'}>
                        <div className={'course-name'}>
                            <span>Название предмета</span>
                        </div>
                        <div className={'fio'}>
                            <span>
                                Преподаватель: Фио преподавателя
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}