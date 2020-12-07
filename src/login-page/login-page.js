import React from "react";

import './loginpage.css'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const login =()=>{
    window.location.assign('http://localhost:3000/courses');
}

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
                            <TextField className={'login-text-field'} id="outlined-basic" label="Логин" variant="outlined"/>
                        </div>
                        <div className={'Password'}>
                            <TextField id="outlined-password-input"
                                       label="Пароль"
                                       type="password"
                                       autoComplete="current-password"
                                       variant="outlined"/>
                        </div>
                        <div className={'remember'}>
                            <input type={'checkbox'}/>
                            <span className={'remember-txt'}>Запомни меня</span>
                            <span className={'forgot-pas'}>Забыли пароль?</span>
                        </div>
                        <Button onClick={login} className={'login-btn'} variant="contained" color="primary" disableElevation>
                             Войти
                        </Button>
                    </div>
                </div>
            </div>
    )
}


