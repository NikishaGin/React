import React, {ChangeEvent, useEffect, useRef, useState} from "react";


export default {
    title: 'input'
}


export const UncontrolledInput = () => <input/>

export const ControlledInput = () => <input value={"it"}/>

export const TrackValueOfInput = () => {
    let [value, setValue] = useState('')
    return <><input type={"number"} onChange={(event)=>{
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }}/> - {value}</>
}

export const GetValue = () => {
    let [value, setValue] = useState(0)

    return (
        <div>
            <input type={"number"}  />
            <button onClick={()=>{setValue(9)}}>save</button> - actual value: {value}
        </div>

        )
}

export const Counter = () => {
    let [value,setValue] = useState(0)
    let [value2,setValue2] = useState(0)
    const inputRef = useRef<HTMLInputElement>(null)
    const inputRef2 = useRef<HTMLInputElement>(null)




    const set = () => {
        const el = inputRef.current as HTMLInputElement
        const el2 = inputRef2.current as HTMLInputElement
        setValue(el.valueAsNumber)
        setValue2(el2.valueAsNumber)
    }


    return (
        <div>
            <input type={"number"} ref={inputRef}/>
            <input type={"number"} ref={inputRef2}/>
            <button onClick={set}>SET</button> - {value} - {value2}
        </div>
    )
}

export const UseInput = () => {
    let [value, setValue] = useState('')
    const onClick = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    return (
        <input value={value} onChange={onClick}/>
    )
}

export const Checkbox = () => {
    let [status, setStatus] = useState(true)
    const event = (event:ChangeEvent<HTMLInputElement>) => {
        setStatus(event.currentTarget.checked)
    }
    return (
        <input type={"checkbox"} checked={status} onChange={event}/>
    )
}

export const SelectOption = () => {
    let [select, setSelect] = useState <string | undefined>("2")
    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelect(event.currentTarget.value)
    }
    return (
        <select value={select} onChange={onChange}>
            <option>none</option>
            <option value={1}>MSK</option>
            <option value={2}>London</option>
            <option value={3}>USA</option>
        </select>
    )
}

export const Tim = () => {
    let [counter, setCounter] = useState(1)

    useEffect(()=>{
        setInterval(()=>{
            setCounter(t=>t+1)
        },1000)
    },[counter])

    return <h3>Time - {counter}</h3>
}


export const TimeDate = () => {
    const a = new Date()
    return <>
        {a}
    </>
}
