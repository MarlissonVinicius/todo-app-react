import { ArrowRight, Check, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Task = {
  id: number;
  title: string;
  description: string;
  finished: boolean;
};

type Props = {
  tasks: Task[];
  onTaskClick: (id: number) => void;
  onTrashClick: (id: number) => void;
};

export default function Tasks(props: Props) {
  const navigate = useNavigate();

  const onDetailClick = (title: string, description: string) => {
    const query = new URLSearchParams({
      'title': title,
      'description' : description
    })
    navigate(`/task-detail?${query.toString()}`);
  };

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            className="bg-slate-400 w-full flex text-left text-white p-2 pl-4 rounded-md gap-2 cursor-pointer"
            onClick={() => props.onTaskClick(task.id)}
          >
            
            {task.finished && (
              <Check size={23} className="text-green-500" />
            )}
            {task.title}
          </button>

          <button
            className="bg-slate-400 text-white p-2 rounded-md w-10 cursor-pointer"
            onClick={() =>
              onDetailClick(task.title, task.description)
            }
          >
            <ArrowRight size={20} />
          </button>

          <button
            className="bg-slate-400 text-white p-2 rounded-md cursor-pointer"
            onClick={() => props.onTrashClick(task.id)}
          >
            <Trash size={20} />
          </button>
        </li>
      ))}
    </ul>
  );
}