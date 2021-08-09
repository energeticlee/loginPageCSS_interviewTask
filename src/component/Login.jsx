import React from 'react'
import style from "./Login.module.css"
import Form from './Form/Form'
import emoji from 'react-easy-emoji'

const Login = () => {
    return (
        <div className={style.container}>
            <div className={style.topFunction}>
                <h1 className={style.loginTitle}>Login Now</h1>
                <div className={style.hl}></div>
                <Form />
            </div>
            <h3 className={style.credit}>Created with ❤️ by Justin</h3>
        </div>
    )
}

export default Login
