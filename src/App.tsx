import { useState } from "react";
import AddTask from "./assets/components/AddTask";
import Tasks from "./assets/components/Tasks";

type Task = {
  id: number;
  title: string;
  description: string;
  finished: boolean;
};

export default function App() {
const [tasks, setTasks] = useState<Task[]>([
  {
    id: 1,
    title: "Implementar fluxo de autenticação de usuários",
    description:
      "Criar formulários de login e cadastro, validar os campos e integrar com a API backend utilizando autenticação com JWT.",
    finished: false,
  },
  {
    id: 2,
    title: "Desenvolver layout responsivo do dashboard",
    description:
      "Construir a interface utilizando Tailwind CSS, garantindo boa adaptação para mobile, tablet e desktop.",
    finished: false,
  },
  {
    id: 3,
    title: "Integrar API REST para gerenciamento de tarefas",
    description:
      "Consumir endpoints para listar, criar, atualizar e remover tarefas, tratando estados de carregamento e erros.",
    finished: false,
  },
  {
    id: 4,
    title: "Implementar filtro e busca de tarefas",
    description:
      "Adicionar funcionalidade para filtrar tarefas por status (concluídas/pendentes) e criar um campo de busca por título.",
    finished: false,
  },
  {
    id: 5,
    title: "Persistir tarefas no localStorage",
    description:
      "Salvar as tarefas no localStorage e carregá-las ao iniciar a aplicação para manter os dados entre sessões.",
    finished: false,
  },
]);

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
      <main className="w-125 space-y-5">
        <h1 className="text-3xl text-slate-100 text-center font-bold">
          Task Manager
        </h1>

        <AddTask onAddTaskClick={onAddTaskClick} />

        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTrashClick={onTrashClick}
        />
      </main>
    </div>
  );
}