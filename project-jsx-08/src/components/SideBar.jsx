import Button from "./Button"
export default function SideBar({ onStartAddProject, projects, onSelectedProject, selectedProjectId }) {
  return (
    <aside className="ml-auto w-1/3 px-8 py-16 bg-stone-500 text-stone-50 md:w-96 rounded-l-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">ToDo List</h2>
      <div>
        <Button onClick={onStartAddProject}>
          + Novo Item
        </Button>
      </div>
      <ul className="mt-7">
        {projects.map((projects) => {
          let cssClasses= "w-full text-left px-2 py-1 rounded-md my-1 text-stone-50 hover:font-bold hover:bg-stone-600";
          if(projects.id === selectedProjectId){
            cssClasses += " bg-stone-800 text-stone-200"
          }else{
            cssClasses += "text-stone-400"
          }

          return (
            <li key={projects.id}>
              <button
                onClick={() => onSelectedProject(projects.id)}
                className={cssClasses}
              >
                {projects.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}