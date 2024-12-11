import { useActionState, use } from "react";
import {useFormStatus} from "react-dom";
import { OpinionsContext } from "../store/opinions-context.jsx"
import Submit from "./Submit.jsx";

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);

  async function shareOpinion(prevState, formData) {
    const title = formData.get("title");
    const body = formData.get("body");
    const userName = formData.get("userName");

    let errors = [];

    if (title.trim().length < 5) {
      errors.push("O no está muito grande");
    }
    if (body.trim().length < 10 || body.trim().length > 300) {
      errors.push("Tem que ser mairo que 10 e menor que 300");
    }
    if (!userName.trim()) {
      errors.push("Por favor colque um nome")
    }
    if (errors.length > 0) {
      return {
        errors, enteredvalues: {
          title,
          body,
          userName,
        },
      };
    }

    await addOpinion({ title, body, userName });
    return { errors: null };

  }

  const [formState, formAction] = useActionState(shareOpinion, {
    erros: null
  });

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.enteredvalues?.userName} />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.enteredvalues?.title} />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.enteredvalues?.body}></textarea>
        </p>

        {formState.errors && (
          <ul className="error">
            {formState.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <Submit></Submit>
      </form>
    </div>
  );
}
