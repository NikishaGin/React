import React, {useState} from "react";

export default {
    title: "React.memo demo"
}

type counterType = {
    counter: number
}

type userType = {
    friends: string []
}

const Counter = (props: counterType) => {
    return <div>{props.counter}</div>
}

const UsersFriends = (props: userType) => {
    return (
        <>
            {props.friends.map((u, index) => <div>{u}</div>)}
        </>
    )
}

const Users = React.memo(UsersFriends)

export const Example1 = () => {

    const [counter, setCounter] = useState(0)
    const [user, setUser] = useState(["Nikita", "Dima", "Ksenia"])

    return (
        <div>
            <Counter counter={counter}/>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <Users friends={user}/>
        </div>
    )
}