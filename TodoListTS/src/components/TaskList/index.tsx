import { TaskProps } from "../../../types/types";

import { MdOutlineTaskAlt } from "react-icons/md";
import { AiFillWarning } from "react-icons/ai";
import { BsFillTrash3Fill, BsFillPencilFill } from "react-icons/bs";
import { MdTaskAlt } from "react-icons/md";
import * as S from "./style";
import { useState } from "react";
import Modal from "../Modal";

const TaskList = ({
  task,
  removeFromTask,
  changeTaskStatus,
  editFromTask,
}: TaskProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      {showModal && (
        <Modal
          id={task.id}
          todo={task}
          setShowModal={setShowModal}
          editFromTask={editFromTask}
        />
      )}

      <S.Task key={task.id}>
        {task.completed ? (
          <>
 
            <S.TaskStatusIcon color="green">
              <MdTaskAlt /> Completa
            </S.TaskStatusIcon>
            <S.TaskContent>{task.textTask}</S.TaskContent>
          </>
        ) : (
          <>
            <S.TaskStatusIcon color="yellow">
              <AiFillWarning /> pendente
            </S.TaskStatusIcon>
            <S.TaskContent>{task.textTask}</S.TaskContent>
          </>
        )}

        <S.ActionIconContainer>
          <S.ActionIcon onClick={() => setShowModal(true)} color="white">
            <BsFillPencilFill title="editar" />
            <span>editar</span>
          </S.ActionIcon>
          <S.ActionIcon color="green" onClick={() => changeTaskStatus(task.id)}>
            <MdOutlineTaskAlt title="concluido" />
            <span> conluído </span>
          </S.ActionIcon>
          <S.ActionIcon color="red" onClick={() => removeFromTask(task.id)}>
            <BsFillTrash3Fill title="excluir" />
            <span>excluir</span>
          </S.ActionIcon>
        </S.ActionIconContainer>
      </S.Task>
    </>
  );
};

export default TaskList;
