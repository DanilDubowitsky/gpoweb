import React from "react";
import {NavBar} from "../NavBar/navbar";
import './courses.css'
import {CourseCard} from "../CourseCard/course-card";


export const MyCourses = (props) => {
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

                    <CourseCard courses={props.coursesElements}/>
                </div>
            </div>
        </div>
    )
}