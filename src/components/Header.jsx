const Header = ({ task, setTask, handleSubmit }) => {
    return (
        <header className="w-full">
            <h1 className="text-xl md:text-3xl font-bold max-w-md mx-auto text-center py-6">
                My Todo List
            </h1>

            <div className="max-w-7xl mx-auto px-4">
                <form onSubmit={handleSubmit} className="flex gap-2 py-2">
                    <input
                        type="text"
                        placeholder="Enter the task to add"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        className="w-[90%] px-2 py-4 rounded-xl outline-none border border-gray-300"
                    />

                    <button
                        type="submit"
                        className="text-lg md:text-xl bg-green-400 px-6 rounded-xl"
                    >
                        Add
                    </button>
                </form>
            </div>
        </header>
    );
};

export default Header;