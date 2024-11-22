export default function SideBar() {
  return (
    <aside className="ml-auto w-1/3 px-8 py-16 bg-stone-500 text-stone-50 md:w-96 rounded-l-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">ToDo List</h2>
      <div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-600 hover:bg-stone-700 hover: text-stone-100">+ Novo Item</button>
      </div>
      <ul></ul>
    </aside>
  )
}