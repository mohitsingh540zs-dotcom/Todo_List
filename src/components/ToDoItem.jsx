const ToDoItem = ({ todo, index }) => {
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
          <button className="bg-green-500 text-white px-3 py-1 rounded">
            ✓
          </button>

          <button className="bg-blue-500 text-white px-3 py-1 rounded">
            Edit
          </button>

          <button className="bg-red-500 text-white px-3 py-1 rounded">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ToDoItem;