import { useTasks } from "../context/TaskContext.jsx";
import { useNavigate } from "react-router";
const TaskCard = ({ task }) => {
    const { deleteTask, toggleTaskDone } = useTasks();
    const navigate = useNavigate();

    const handleDone = async () => {
        await toggleTaskDone(task.id);
    };

    return (
        <div className="bg-zinc-700 p-4 text-white rounded-md">
            <header className="flex justify-between">
                <h1 className="text-lg font-bold">{task.title}</h1>
                <span>{task.done ? "✔" : "❌"}</span>
            </header>
            <p className="text-md">{task.description}</p>
            <span>{task.createAt}</span>
            <div className="p-2 flex gap-1 justify-end">
                <button
                    className="bg-red-700 px-2 py-1 rounded-md text-white  "
                    onClick={() => deleteTask(task.id)}
                >
                    Delete
                </button>
                <button
                    className="bg-slate-700 px-2 py-1 rounded-md text-white  "
                    onClick={() => navigate(`/edit/${task.id}`)}
                >
                    Edit
                </button>
                <button
                    className="bg-green-700 px-2 py-1 rounded-md text-white "
                    onClick={() => handleDone()}
                >
                    Toggle task
                </button>
            </div>
        </div>
    );
};

export default TaskCard;
