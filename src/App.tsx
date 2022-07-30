import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff";
import {UncontrolledAccordion} from "./Components/Accordion/UncontrolledAccordion";
import {action} from "@storybook/addon-actions";
import {EffectTitle} from "./Components/EffectTitle/EffectTitle";

function App() {

    let [acc, setACC] = useState<boolean>(false)

    const onClickCallback = action("IT")

    return (
        <div className="App">
            <EffectTitle/>
     {/*       <PageTitle title={"This is App"}/>*/}
            {/*<Rating value={3}/>*/}
 {/*           <Accordion titleValue={"Menu"}
                       acc={acc}
                       setACC={() => setACC(!acc)}
                       items={[
                           {title: "Nikita", value: 1},
                           {title: "Dima", value: 2},
                           {title: "Misha", value: 3},
                       ]}
                       onClick={(id)=>{alert("user")}}
            />*/}
            {/*<Accordion titleValue={"Users"} setACC={()=>setACC(!acc)}/>*/}
{/*            <OnOff/>
            <OnOff/>
            <OnOff/>*/}
{/*            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'User'}/>
            <Rating/>*/}
        </div>
    );
}


type pageTitleType = {
    title: string
}

const PageTitle = (props: pageTitleType) => {
    return (
        <>
            <h3>{props.title}</h3>
        </>
    )
}

export default App;