import { createContext, useContext, useState } from "react";
import {
    getTasksRequest,
    deleteTaskRequest,
    createTaskRequest,
    getTaskRequest,
    updateTaskRequest,
    toggleTaskRequest,
} from "../api/taskApi";

export const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error("useTasks debe estar dentro de ContextProvider");
    }
    return context;
};

export const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const loadTasks = async () => {
        const response = await getTasksRequest();
        //  console.log(response);
        setTasks(response.data);
    };
    const deleteTask = async (id) => {
        try {
            const response = await deleteTaskRequest(id);
            setTasks(tasks.filter((e) => e.id !== id));
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    const getTask = async (id) => {
        try {
            const response = await getTaskRequest(id);

            //    console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    const createTask = async (task) => {
        try {
            const response = await createTaskRequest(task);

            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    const updateTask = async (id, newFields) => {
        try {
            await updateTaskRequest(id, newFields);
        } catch (error) {
            console.log(error);
        }
    };

    const toggleTaskDone = async (id) => {
        try {
            const taskFound = tasks.find((task) => task.id === id);
            
            await toggleTaskRequest(id, taskFound.done === 0 ? true : false);
            setTasks(
                tasks.map((task) =>
                    task.id === id ? { ...task, done: !task.done } : task
                )
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                loadTasks,
                deleteTask,
                createTask,
                getTask,
                updateTask,
                toggleTaskDone,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};
