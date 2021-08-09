import React, { useState, useEffect } from 'react'
import style from "./Display.module.css"
import data from "./rightDisplay/picture"

const Display = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex(a => a < data.length - 1 ? a += 1 : 0)
            console.log(slideIndex)
        }, 3000)
        return () => { clearInterval(interval) }
    }, [slideIndex])

    return (
        <div className={style.container}>
            {data.map((a, index) => (
                <div className={slideIndex === index ? style.slideractive : style.slider}>
                    <img src={a.picture} />
                    <div className={style.textContainer}>
                        <div className={style.title}>{a.title}</div>
                        <div className={style.hl}></div>
                        <p className={style.text}>{a.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Display
