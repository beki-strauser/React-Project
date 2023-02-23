import React, { useState } from "react";

import './NewItem.css'

const NewItem = props => {

    const [userInput, setUserInput] = useState('');

    const addItemHandler = event => {
        event.preventDefault();

        const newItem = {
            id: Math.random().toString(),
            text: userInput
        }

        setUserInput('');

        props.onAddItem(newItem);
    };

    const textChangeHandler = event => {
        setUserInput(event.target.value);
    }

    return (
        <form onSubmit={addItemHandler}>
            <input type="text" value={userInput} onChange={textChangeHandler}/>
            <button className="submit" type="submit">New Item</button>
        </form>
    )
};

export default NewItem