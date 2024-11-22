import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal.";

export default function NovoProjeto({ onAdd }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    });
  }


  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-500 mb-4">Invalido</h2>
        <p className="text-stone-400 mb-4">Opss! Parece que você esqueceu de preencher alguma coisa</p>
        <p className="text-stone-400 mb-4">Por favor preencha o que está faltando</p>
      </Modal>
      <div className="mx-auto">
        <div className="w-[40rem] mt-16 ml-24 ">
          <menu className="flex items-center justify-end gap-4 my-4">
            <li>
              <button className="text-stone-700 hover:text-stone-950 ">
                Cancelar
              </button>
            </li>
            <li>
              <button
                className="bg-stone-600 hover:bg-stone-700 hover: text-stone-100 px-6 py-2 rounded-md  "
                onClick={handleSave}>
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
            <Input type="text" ref={title} label="Título" />
            <Input type="date" ref={dueDate} label="Due Date" />
            <Input ref={description} label="Descrição" textarea />
          </div>
        </div>
      </div>
    </>


  );
}