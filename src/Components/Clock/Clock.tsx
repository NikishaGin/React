import {useEffect, useState} from "react";
import './Clock.css';


export const Clock = () => {

    let [clock,setClock] = useState(new Date())
    let [value,setValue] = useState(1)


    useEffect(()=>{
        setInterval(()=>{
            setClock(new Date())
        },1000)
    },[clock])


    const getDigital = (num: number) => num < 10 ? "0" + num : num


    return <>
        {value}
        <button onClick={()=>setValue(value+1)}>+</button>
        <span>{getDigital(clock.getHours())}</span>
        :
        <span>{getDigital(clock.getMinutes())}</span>
        :
        <span>{getDigital(clock.getSeconds())}</span>
    </>

}

/*
export const Clock = () => {

    let [clock, setClock] = useState(new Date())

    useEffect(()=>{
        setInterval(()=>{
            setClock(new Date())
        },1000)
    }, [])

    const getDigital = (num: number) => num < 10 ? "0" + num : num

    return <div>
        <span>{getDigital(clock.getHours())}</span>
        :
        <span>{getDigital(clock.getMinutes())}</span>
        :
        <span>{getDigital(clock.getSeconds())}</span>
    </div>
}*/
