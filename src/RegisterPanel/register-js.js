import React from "react";
import './registerpanel.css'
export const RegisterPanel = ()=>{
    return(
        <div className={'container'}>
            <div className={'reg-div'}>
                <div className={'register-form'}>
                    <div>
                        <label className={'reg-user-lable'}>Регистрация пользователя</label>
                    </div>
                    <div className={'Login'}>
                        <label>Фамилия</label>
                        <input type={'text'}/>
                    </div>
                    <div className={'Login'}>
                        <label>Имя</label>
                        <input type={'text'}/>
                    </div>
                    <div className={'Login'}>
                        <label>Отчество</label>
                        <input type={'text'}/>
                    </div>
                    <div className={'Login'}>
                        <label>Электронная почта</label>
                        <input type={'text'}/>
                    </div>
                    <div className={'Login'}>
                        <label>Пароль</label>
                        <input type={'password'}/>
                    </div>
                    <div className={'Login'}>
                        <label>Повторите пароль</label>
                        <input type={'password'}/>
                    </div>
                    <div className={'Login'}>
                        <label>Роль пользователя</label>
                        <select>
                            <option>Преподаватель</option>
                            <option>Ученик</option>
                        </select>
                    </div>
                    <button className={'login-btn'}>Зарегистрироваться</button>
                </div>
            </div>
        </div>
    )
}