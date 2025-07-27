import { useState } from "react";
export function Todos({todos}) {
    const markAsDone = (id)=>{
        fetch("http://localhost:3000/completed/",{
            method: "PUT",
            body: JSON.stringify({ id: id }),
            headers : {
                "content-type": "application/json"
            }
    }).then(respone => response.json())
    .then(data => {console.log("marked as completed")})
    }
    return <div>
        {   
            todos.map((todo)=>{
                return <div key={todo._id}>
                    <h1>{todo.title} </h1> 
                    <h2>{todo.description}</h2>
                    <button onClick={()=>markAsDone(todo._id)}>{todo.completed ? "completed" : "Mark as complete"}</button>
                </div>
            })
        }
    </div>
}