import React from "react";

function openCourse(index) {
    window.location.assign('http://localhost:3000/courses/' + index);
}

export const CourseCard = (props)=>{
    let courses = props.courses;
    let courseCard = courses.map((course,index) =>
        <div onClick={()=>openCourse(index)}  key={index} className={'card-course'}>
            <div className={'course-name'}>
                <span>{course.name}</span>
            </div>
            <div className={'fio'}>
            <span>
                {course.teacher}
            </span>
            </div>
        </div>
    );
    return (
        <div>{courseCard}</div>
        )
}