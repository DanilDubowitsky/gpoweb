import React from "react";

export const CourseCard = (props)=>{
    let courses = props.courses;
    let courseCard = courses.map((course) =>
        <div className={'card-course'}>
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