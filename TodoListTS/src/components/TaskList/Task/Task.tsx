import { TaskType } from "../types"

import {MdOutlineTaskAlt} from 'react-icons/md'
import {AiFillCloseCircle, AiFillWarning} from 'react-icons/ai'
import {BsFillTrash3Fill, BsFillPencilFill } from 'react-icons/bs'
import * as S from './style'



const Task = () => {
  return (
      <S.Task>
        <S.TaskStatusIcon color='yellow' > <AiFillWarning/> pendente</S.TaskStatusIcon>
        <S.TaskContent>olaaaajdhdjkfhgnksnhkjdvhaaa</S.TaskContent>

        <S.ActionIconContainer><S.ActionIcon color='white'> 
          <BsFillPencilFill title='editar'/> 
          <span>editar</span>
        </S.ActionIcon>
        <S.ActionIcon color='green'>
          <MdOutlineTaskAlt title='concluido' />
          <span>  conluido</span>
        </S.ActionIcon>
         <S.ActionIcon color='red'>
          <BsFillTrash3Fill title='excluir' />
          <span>excluir</span>
         </S.ActionIcon></S.ActionIconContainer>

        </S.Task>

  )
}

export default Task