import { TaskType } from "../../../types/types";

import { MdOutlineTaskAlt } from "react-icons/md";
import { AiFillCloseCircle, AiFillWarning } from "react-icons/ai";
import { BsFillTrash3Fill, BsFillPencilFill } from "react-icons/bs";
import * as S from "./style";
type TaskProps = { 
  task: TaskType
  removeFromTask: (id: number) => void
  changeTaskStatus: (id: number) => void
  
  };

const TaskList = ({ task, removeFromTask, changeTaskStatus }: TaskProps) => {
  console.log(task)
  return (
    <S.Task>
      <S.TaskStatusIcon color="yellow">

        <AiFillWarning /> pendente
      </S.TaskStatusIcon>
      <S.TaskContent>{task.textTask}</S.TaskContent>

      <S.ActionIconContainer>
        <S.ActionIcon color="white">
          <BsFillPencilFill title="editar" />
          <span>editar</span>
        </S.ActionIcon>
        <S.ActionIcon color="green" onClick={()=> changeTaskStatus(task.id)}>
          <MdOutlineTaskAlt title="concluido" />
          <span> conluido </span>
        </S.ActionIcon>
        <S.ActionIcon color="red" onClick={() => removeFromTask(task.id)}>
          <BsFillTrash3Fill title="excluir" />
          <span>excluir</span>
        </S.ActionIcon>
      </S.ActionIconContainer>
    </S.Task>
  );
};

export default TaskList;
