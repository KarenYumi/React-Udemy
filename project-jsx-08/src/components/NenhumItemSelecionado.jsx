import catImage from "../assets/cat-image.gif"
import Button from "./Button";
export default function NenhumItemSelecionado({onStartAddProject}){
  return(
    <div className="mt-12 text-center w-2/3">
      <img
        src={catImage}
        alt="waiting to be picked"
        className="w-40 h-40 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 mb-4">
        Nenhum Item Selecionado
        </h2>
      <p className="text-stone-400 mb-4">
        Selecione um item para começar
        </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>
          Criar Novo Item
        </Button>
      </p>
    </div>

  );
}