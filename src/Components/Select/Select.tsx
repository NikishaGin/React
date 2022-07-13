import React from "react";

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any)=> void
    items: ItemType []
}

export const Select = (props:SelectPropsType) => {
    const selectedItem = props.items.find(i => i.value === props.value)
        return (
            <div>
                <select>
                    <option value="">MSK</option>
                    <option value="">London</option>
                    <option value="">USA</option>
                </select>
                <h3>{selectedItem && selectedItem.title}</h3>
                {props.items.map(i=><div>{i.title}</div>)}
            </div>
        )
}