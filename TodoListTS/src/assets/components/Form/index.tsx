import * as S from "./style";

const Form = () => {
  return (
    <S.Main>
      <S.Form>
        <label htmlFor="tarefas">criar tarefas
        <input type="text" name="tarefas" id="tarefas" placeholder="criar tarefa" /></label>
        <button> adicionar tarefa</button>
        </S.Form>
    </S.Main>
  );
};

export default Form;
