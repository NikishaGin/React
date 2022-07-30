import React, {useEffect, useState} from 'react';

export const StopWatch = () => {


    let [watch, setWatch] = useState(1)

    useEffect(()=>{
        setInterval(()=>{
            console.log("title")
            setWatch(state => state + 1)
        }, 1000)
    },[])

    return (
        <div>
            {watch}
            {/*<button onClick={()=>setWatch(watch + 1)}>title</button>*/}
        </div>
    );
};

