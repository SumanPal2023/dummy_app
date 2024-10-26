import React, { useRef, useState } from 'react'
import styles from './Timer.module.css'
const TimerData = () => {
    let [count, setCount] = useState(0);
    let [countColor,setCountColor]=useState("")
    let timer = useRef()
    console.log(timer)
    const startCount = () => {
        timer.current = setInterval(() => { setCount(preval => preval + 1) }, 1000)
        setCountColor("green")
    }
    const stopCount = () => {
        setCount(0)
        clearInterval(timer.current)
        setCountColor('crimson')
    }
    const pauseCount = () => {
        clearInterval(timer.current)
        setCountColor('royalblue')
    }
    return (
        <div className={styles.timercnt}>
            <h1 style={{color:countColor}}> {count}</h1>
            <div className={styles.btncnt}>
                <button  className={styles.start} onClick={startCount}>start</button>
                <button  onClick={stopCount}>stop</button>
                <button  onClick={pauseCount}>pause</button>
            </div>
        </div>
    )
}
export default TimerData
