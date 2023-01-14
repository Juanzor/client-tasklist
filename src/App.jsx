import { Route, Routes } from "react-router-dom";
import TaskPage from "./pages/TaskPage.jsx";
import TaskForm from "./pages/TaskForm.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import NavBar from "./components/NavBar.jsx";
import { TaskContextProvider } from "./context/TaskContext.jsx";
const App = () => {
    return (
        <div className="bg-zinc-900 h-screen">
                    <NavBar />
            <div className="container mx-auto py-5">
                <TaskContextProvider>
                    <Routes>
                        <Route path="/" element={<TaskPage />} />
                        <Route path="/new" element={<TaskForm />} />
                        <Route path="/edit/:id" element={<TaskForm />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </TaskContextProvider>
            </div>
        </div>
    );
};

export default App;
