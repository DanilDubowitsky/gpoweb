import React from "react";
import {NavBar} from "../NavBar/navbar";
import './courses.css'
import {CourseCard} from "../CourseCard/course-card";
let coursesElements = [{
    name:'Метрология',
    teacher: 'Учитель 1'
},{name: 'ОБЖ',teacher: 'Учитель 2'},{name: 'Коммуникационные сети', teacher: 'Учитель 3'}];

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

                    <CourseCard courses={coursesElements}/>
                </div>
            </div>
        </div>
    )
}