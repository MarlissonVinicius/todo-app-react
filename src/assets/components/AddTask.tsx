import { useState } from "react";


type Props = {
  onAddTaskClick: (title: string, description: string) => void;
};

export default function AddTask(props: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [warning,setWarning] = useState("")
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        className="bg-white border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        type="text"
        name="title"
        placeholder="Título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="bg-white border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        type="text"
        id="description"
        placeholder="Descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <span>
        <p className="text-red-500 font-bold">{warning}</p>
      </span>
      <button
        className="bg-slate-500 px-4 py-2 text-white font-medium rounded-md"
        onClick={() => {
          if (title.trim() === "" || description.trim() === "") {
            setWarning ("Campos não podem ser vazios!");
          } else {
            props.onAddTaskClick(title, description);
            setTitle("");
            setDescription("");
            setWarning("")
          }
        }}
      >
        Adicionar
      </button>
    </div>
  );
}
