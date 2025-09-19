// frontend/src/components/Todos.jsx
export function Todos({ todos }) {
  const markAsCompleted = (id) => {
    fetch("http://localhost:3000/completed", {
      method: "PUT",
      body: JSON.stringify({ id }),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(async (res) => {
        await res.json();
        alert("Todo marked as completed!");
        window.location.reload();
      })
      .catch(error => console.error("Error marking todo as completed:", error));
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <button onClick={() => markAsCompleted(todo._id)}>
            {todo.completed ? "Completed" : "Mark as Completed"}
          </button>
        </div>
      ))}
    </div>
  );
}