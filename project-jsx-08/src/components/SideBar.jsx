import Button from "./Button"
export default function SideBar({ onStartAddProject, projects }) {
  return (
    <aside className="ml-auto w-1/3 px-8 py-16 bg-stone-500 text-stone-50 md:w-96 rounded-l-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">ToDo List</h2>
      <div>
        <Button onClick={onStartAddProject}>
          + Novo Item
        </Button>
      </div>
      <ul className="mt-7">
        {projects.map(projects => <li key={projects.id}>
          <button className="w-full text-left px-2 py-1 rounded-md my-1 text-stone-50 hover:font-bold hover:bg-stone-600">
            {projects.title}
          </button>
        </li>)}
      </ul>
    </aside>
  )
}