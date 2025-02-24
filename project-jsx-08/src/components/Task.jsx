import NewTask from "./NewTask";


export default function Task({ task, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Lista</h2>
      <NewTask onAdd={onAdd} />
      {task?.length === 0 && (
        <p className="text-stone-800 my-4"> Nenhuma Lista neste Item</p>
      )}
      {task?.length > 0 && (
        <ul className="p-4 mt-08 rounded-md bg-stone-200">
          {task.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button className="text-stone-700 hover:text-red-500" onClick={() => onDelete(task.id)}>Clear</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}