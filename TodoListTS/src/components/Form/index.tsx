import * as S from "./style";
import TaskList from '../TaskList';
import {MdPlaylistAdd} from 'react-icons/md'
const Form = () => {
  return (
    <S.Main>
      <S.Form>
        <label htmlFor="tarefas">criar tarefas
        <input type="text" name="tarefas" id="tarefas" placeholder="criar tarefa" /></label>
        <button> <span> <MdPlaylistAdd /></span> adicionar tarefa</button>
        </S.Form>
        <TaskList />
    </S.Main>
  );
};

export default Form;
