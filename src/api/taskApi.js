import axios from "axios";

export const deleteTaskRequest = async (id) =>
    await axios.delete(`https://api-tasklist-gmiy.onrender.com/tasks/${id}`);

export const getTaskRequest = async (id) =>
    await axios.get(`https://api-tasklist-gmiy.onrender.com/tasks/${id}`);

export const getTasksRequest = async () =>
    await axios.get("https://api-tasklist-gmiy.onrender.com/tasks");

export const createTaskRequest = async (task) =>
    await axios.post("https://api-tasklist-gmiy.onrender.com/tasks", task);

export const updateTaskRequest = async (id, newFields) =>
    await axios.put(
        `https://api-tasklist-gmiy.onrender.com/tasks/${id}`,
        newFields
    );

export const toggleTaskRequest = async (id, done) =>
    await axios.put(`https://api-tasklist-gmiy.onrender.com/tasks/${id}`, {
        done,
    });
