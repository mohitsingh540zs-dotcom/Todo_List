const ToDoItem = ({ todo, index, deleteTodo, markCompleted }) => {
    return (
        <tr>
            <td className="border p-3">{index + 1}</td>

            <td className="border p-3">
                {todo.text}
            </td>

            <td className="border p-3 text-center">
                {todo.completed ? "Completed" : "Pending"}
            </td>

            <td className="border p-3">
                <div className="flex justify-center gap-2">
                    <button onClick={() => markCompleted(todo.id)}
                        className="bg-green-500 text-white px-3 py-1 rounded cursor-pointer">
                        ✓
                    </button>

                    <button className="bg-blue-500 text-white px-3 py-1 rounded cursor-pointer">
                        Edit
                    </button>

                    <button
                        onClick={() => deleteTodo(todo.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
                    >
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default ToDoItem;