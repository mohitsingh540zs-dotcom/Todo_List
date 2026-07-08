import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, deleteTodo, markCompleted }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 mt-8 overflow-x-auto">
            <table className="w-full border border-gray-300 border-collapse">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border p-3 text-left">#</th>
                        <th className="border p-3 text-left">Task</th>
                        <th className="border p-3 text-center">Status</th>
                        <th className="border p-3 text-center">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {todos.length > 0 ? (
                        todos.map((todo, index) => (
                            <ToDoItem
                                key={todo.id}
                                index={index}
                                todo={todo}
                                deleteTodo={deleteTodo}
                                markCompleted={markCompleted}
                            />
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="4"
                                className="text-center py-6 text-gray-500"
                            >
                                No Tasks Found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ToDoList;