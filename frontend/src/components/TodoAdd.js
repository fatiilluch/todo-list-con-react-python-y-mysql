import React, { useState } from 'react'

function TodoAdd ({addTodo}) {
    const [userInput, setuserInput] = useState("");

    const handleOnChange = (e) => {
        setuserInput(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // de esta manera el form no se va a enviar por defecto
        // verificamos el texto que estamos ingresando a la cajita
        if (userInput.trim() !== '') {
            addTodo(userInput);
            setuserInput('');
        }
    }
    return (
        <div style={{margin: 20}}>
            <form onSubmit={handleSubmit}>
                <input type="text" value={userInput} onChange={handleOnChange}/>
                <button> Add todo </button>
            </form>
        
        </div>
    )
}

export default TodoAdd
