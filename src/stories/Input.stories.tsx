import React, {ChangeEvent, useState} from "react";


export default {
    title: 'input'
}


export const UncontrolledInput = () => <input/>

export const ControlledInput = () => <input value={"it"}/>

export const TrackValueOfInput = () => {
    let [value, setValue] = useState('')
    return <><input onChange={(event)=>{
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }}/> - {value}</>
}

export const GetValue = () => {
    let [value, setValue] = useState('')

    return (
        <div>
            <input />
            <button onClick={()=>{setValue('UseRef')}}>save</button> - actual value: {value}
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