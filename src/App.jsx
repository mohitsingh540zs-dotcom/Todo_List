import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const markCompleted = (id) => {
    const updatedTodos = todos.map((todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    }));

    setTodos(updatedTodos);
  };

  return (
    <>
      <Header
        task={task}
        setTask={setTask}
        handleSubmit={handleSubmit}
      />

      <ToDoList todos={todos} deleteTodo={deleteTodo} markCompleted={markCompleted} />
    </>
  );
};

export default App;