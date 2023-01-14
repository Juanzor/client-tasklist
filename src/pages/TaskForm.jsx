import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const TaskForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { createTask, getTask, updateTask } = useTasks();
    const [task, setTask] = useState({
        title: "",
        description: "",
    });

    useEffect(() => {
        const loadTask = async () => {
            if (id) {
                const task = await getTask(id);

                setTask({
                    title: task.title,
                    description: task.description,
                });
            }
        };
        loadTask();
    }, []);

    return (
        <div >
            <Formik
                initialValues={task}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    if (id) {
                        console.log("update");
                        await updateTask(id, values);
                    } else {
                        await createTask(values);
                    }

                    setTask({
                        title: "",
                        description: "",
                    });

                    navigate("/");
                }}
            >
                {({ handleSubmit, handleChange, values, isSubmitting }) => (
                    <Form
                        className="bg-slate-300 max-w-md rounded-md p-4 mx-auto  my-10"
                        onSubmit={handleSubmit}
                    >
                        <h1 className="text-xl font-bold text-center">
                            {id ? "Edit task" : "New Task"}
                        </h1>

                        <label className="block">Title</label>
                        <input
                            className="px-2 py-1 rounded-md w-full"
                            type="text"
                            name="title"
                            placeholder="Write a title..."
                            onChange={handleChange}
                            value={values.title}
                        />
                        <label className="block">Description</label>
                        <textarea
                            className="px-2 py-1 rounded-md w-full"
                            name="description"
                            rows="3"
                            placeholder="Write a description..."
                            onChange={handleChange}
                            value={values.description}
                        ></textarea>

                        <button
                            className="block bg-indigo-500 px-3 py-1 rounded-md w-full  font-bold text-white"
                            disabled={isSubmitting}
                            type="submit"
                        >
                            {isSubmitting ? "Saving..." : "Save"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default TaskForm;
