import React from "react";
import './admin-panel.css';
export const AdminPanel = () =>{
    return (
        <div className={'container'}>
            <div className={'panel-div'}>
                <span className={'panel-admin-txt'}>ПАНЕЛЬ АДМИНИСТРАТОРА</span>
            </div>
            <div className={'panel'}>
                <div className={'loginForm'}>
                    <div className={'Login'}>
                        <label>Логин</label>
                        <input type={'text'}/>
                    </div>
                    <div className={'Password'}>
                        <label>Пароль</label>
                        <input type={'password'}/>
                    </div>
                </div>
            </div>
        </div>

    )
}
