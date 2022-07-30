import React, {useEffect, useState} from 'react';

export const EffectTitle = () => {
    let [title, setTitle] = useState(1)
    let [fake, setFake] = useState(1)

    console.log("effect")

    useEffect(()=>{
        setTimeout(()=>{
            console.log("Title")
            document.title = title.toString()
        },1000)
    },[title])


    return (
        <div>
            {fake}
            <button onClick={()=>setFake(fake + 1)}>fake+1</button>
            <button onClick={()=>setTitle(title+1)}>title+1</button>
        </div>
    );
};

