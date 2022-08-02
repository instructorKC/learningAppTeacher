import React, { useState, useEffect} from 'react';


function MyfunctionTodos() {
    const [arrayOfTodos, setArrayOfTodos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
        return response.json()
        }).then(todos => setArrayOfTodos(todos)) // update state with
                                                    // setArrayOfTodos 
    }, []); //when dependency array empty works like componentDidMount
    return (
      <div>
            {arrayOfTodos.map((todo, index) => {
            return  <li key={index}>{todo.title}</li>              
            })}  
      </div>
    );
}

export default MyfunctionTodos;