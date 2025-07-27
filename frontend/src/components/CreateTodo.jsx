import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle]= useState("");
    const [description, setDescription]= useState("");

    return <div>
        <input style={{
            padding: 10, margin: 10
        }}
        type="text" placeholder="title" onChange={(e)=>{
            const value = e.target.value; // e.target gives DOM element
            setTitle(value);
        }}/> <br />

        <input style={{
            padding: 10, margin: 10
        }} type="text" placeholder="description" onChange={(e)=>{
            const value = e.target.value; // e.target gives DOM element
            setDescription(value);
        }}/> <br />

        <button onClick={()=>{
            fetch("http://localhost:3000/todos/",{
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "content-type": "application/json"
                }
            })
            .then(async (res)=>{
                const json = await res.json();
                const id = json.id;
                
                alert("todo added");
            })
        }}>Add a todo</button>
    </div>
}

