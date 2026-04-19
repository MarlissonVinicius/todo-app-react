import { useEffect, useState } from "react";
import AddTask from "./assets/components/AddTask";
import Tasks from "./assets/components/Tasks";
type Task = {
  id: number;
  title: string;
  description: string;
  finished: boolean;
};
export default function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const stored = localStorage.getItem("tasks");
    if (!stored) return [];
    return JSON.parse(stored);
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  function onTaskClick(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, finished: !task.finished };
      }
      return task;
    });
    setTasks(newTasks);
  }
  function onTrashClick(taskId: number) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }
  function onAddTaskClick(taskTitle: string, taskDescription: string) {
    const newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      title: taskTitle,
      description: taskDescription,
      finished: false,
    };
    setTasks((prev) => [...prev, newTask]);
  }
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      {" "}
      <main className="w-125 space-y-5">
        {" "}
        <h1 className="text-3xl text-slate-100 text-center font-bold">
          {" "}
          Task Manager{" "}
        </h1>{" "}
        <AddTask onAddTaskClick={onAddTaskClick} />{" "}
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTrashClick={onTrashClick}
        />{" "}
      </main>{" "}
    </div>
  );
}
