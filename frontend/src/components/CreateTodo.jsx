import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = () => {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(async (res) => {
        await res.json();
        alert("Todo Added!");
        // Clear input fields after adding
        setTitle("");
        setDescription("");
        // Reload page to see new todo
        window.location.reload();
      })
      .catch(error => console.error("Error adding todo:", error));
  };

  return (
    <div>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <br />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <br />
      <button onClick={addTodo}>Add a todo</button>
    </div>
  );
}