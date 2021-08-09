import React from 'react'
import style from "./Form.module.css"

const Form = () => {
    return (
        <>
            <form action="" className={style.form}>
                <div className={style.inputContainer}>
                    <label className={style.label}>USERNAME</label>
                    <input type="text" className={style.input} required />
                </div>
                <div className={style.inputContainer}>
                    <label className={style.label}>PASSWORD</label>
                    <input type="text" className={style.input} required />
                </div>
                <div className={style.submitContainer}>
                    <div className={style.checkboxContainer}>
                        <input type="checkbox" className={style.checkbox} />
                        <p>Remember Me</p>
                    </div>
                    <button className={style.button}>Submit</button>
                </div>
            </form>
        </>
    )
}

export default Form
