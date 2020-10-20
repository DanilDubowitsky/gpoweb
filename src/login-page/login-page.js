import React from "react";

import './loginpage.css'
export const LoginPage = () => {
    return(
            <div className={'main-div'}>

                <div className={'imgDiv'}>
                    <img src={require('../images/tusur.png')} alt={'картинка'}/>
                </div>
                <div  className={'rightDiv'}>
                    <div className={ 'login-form'}>
                        <div className={'welcome1'} >
                            <span>Добро пожаловать</span>
                        </div>
                        <div className={'wellcome'}>
                            <span>Авторизуйтесь в Вашем аккаунте</span>
                        </div>
                        <div className={'Login'}>
                            <label>Логин</label>
                            <input type={'text'}/>
                        </div>
                        <div className={'Password'}>
                            <label>Пароль</label>
                             <input type={'password'}/>
                        </div>
                        <div className={'remember'}>
                            <input type={'checkbox'}/>
                            <span className={'remember-txt'}>Запомни меня</span>
                            <span className={'forgot-pas'}>Забыли пароль?</span>
                        </div>
                        <button className={'login-btn'}>Войти</button>

                    </div>
                </div>
            </div>
    )
}


