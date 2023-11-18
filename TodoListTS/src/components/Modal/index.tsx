import { ChangeEvent, useState } from "react";
import { ModalProps} from "../../../types/types";
import * as S from "./style";



const Modal = ({ id, todo, setShowModal, editFromTask }: ModalProps) => {
  const [modalTask, setModalTask] = useState<string>(todo.textTask);

  const handleChangeTask = (e: ChangeEvent<HTMLInputElement>) => {
    const taskEdit = e.target.value;
    setModalTask(taskEdit);
  };
  const handleEditFromTask = () => {
    editFromTask(id, modalTask);
    setShowModal(false);
  };
  
  return (
    <S.ContainerModal>
      <div>
        <label htmlFor="">
          editar tarefa
          <input onChange={handleChangeTask} type="text" value={modalTask} />
        </label>
        <button onClick={handleEditFromTask}>editar </button>
      </div>
    </S.ContainerModal>
  );
};

export default Modal;
