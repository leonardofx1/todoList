import { TaskType } from "../types"
import {CgGoogleTasks} from 'react-icons/cg'
import {MdOutlineTaskAlt, MdEditDocument} from 'react-icons/md'
import {AiFillCloseCircle, AiFillWarning} from 'react-icons/ai'
import * as S from './style'


const Task = () => {
  return (
      <S.Task>
        <p><span><AiFillWarning/></span>olaaaaaasafdfaedsfdswkgjsdfklgjhkdshfklhgjkfhsdkjdhdjkfhgnksnhkjdvhbjkgdshkjghfdsjkhhgkjdfshkaaaaaaaasafdsdfasadfgasdfascxaaaa</p>

        <S.ContainerIcons> <MdEditDocument/> <MdOutlineTaskAlt /> <AiFillCloseCircle /></S.ContainerIcons>

        </S.Task>

  )
}

export default Task