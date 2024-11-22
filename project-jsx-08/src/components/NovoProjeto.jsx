import Input from "./Input";

export default function NovoProjeto() {
  return (
    <div className="w-[36rem] mt-16 ml-24">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-700 hover:text-stone-950 ">
            Cancelar
          </button>
        </li>
        <li>
          <button className="bg-stone-600 hover:bg-stone-700 hover: text-stone-100 px-6 py-2 rounded-md  ">
            Salvar
          </button>
        </li>
      </menu>
      <div>
        {/* <p>
          <label>Título</label>
          <input></input>
        </p>
        <p>
          <label>Due Date</label>
          <input type="date"></input>
        </p>
        <p>
          <label>Descrição</label>
          <textarea> </textarea>
        </p> */}
        <Input label="Título" />
        <Input label="Due Date" />
        <Input label="Descrição" textarea />
      </div>
    </div>
  );
}