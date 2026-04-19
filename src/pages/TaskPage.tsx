import { CircleArrowLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function TaskPage() {
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title");
  const description = searchParams.get("description");

  const navigate = useNavigate();

  const onReturnClick = () => {
    navigate("/");
  };

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <main className="w-125 space-y-5">
        <div className="flex justify-center relative">
          <button
            className="absolute left-0 top-0 cursor-pointer"
            onClick={onReturnClick}
          >
            <CircleArrowLeft />
          </button>

          <h1 className="text-3xl text-slate-100 font-bold">
            Detalhes da Tarefa
          </h1>
        </div>

        <div className="bg-slate-200 p-6 rounded-md">
          <h2 className="text-3xl text-slate-600 font-bold">
            {title ?? "Sem título"}
          </h2>
          <p className="text-slate-600">
            {description ?? "Sem descrição"}
          </p>
        </div>
      </main>
    </div>
  );
}
