import Task from "./Task.jsx";

export default function SeelectedItem({ project, onDelete, onAddTask, onDeleteTask, task }) {

  const formattedDate = new Date(project.dueDate).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  return (
    <div className="w-[35rem] mt-16 mx-auto">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button className="text-stone-600 rounded-md px-3 py-2 hover:bg-stone-400 hover:text-slate-200" onClick={onDelete}>
            DELETE
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
      </header>
      <Task onAdd={onAddTask} onDelete={onDeleteTask} task={task}/>
    </div>
  )
} 