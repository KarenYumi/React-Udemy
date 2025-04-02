import { useRef } from 'react';

const newTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent ) =>{
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if( enteredText.trim().length === 0){
      return;
    }

    props.onAddTodo(enteredText);
  };
 console.log();
  return (
  <form onSubmit={submitHandler}>
    <label htmlFor="text">Todo text</label>
    <input type="text" id='text' ref={todoTextInputRef}></input>
    <button>Add Todo</button>
  </form>
  )
}

export default newTodo;