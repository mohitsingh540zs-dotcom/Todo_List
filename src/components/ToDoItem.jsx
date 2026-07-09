const ToDoItem = ({ todo, index, deleteTodo, markCompleted, editingId, editText, setEditText, startEditing, saveTodo }) => {
    return (
        <tr>
            <td className="border p-3">{index + 1}</td>

            <td className="border p-3">
                {todo.id === editingId ? (
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="border px-2 py-1 rounded w-full"
                    />
                ) : (
                    todo.text
                )}
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

                    {todo.id === editingId ? (
                        <button
                            onClick={saveTodo}
                            className="bg-green-500 text-white px-3 py-1 rounded"
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            onClick={() => startEditing(todo)}
                            className="bg-blue-500 text-white px-3 py-1 rounded"
                        >
                            Edit
                        </button>
                    )}

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