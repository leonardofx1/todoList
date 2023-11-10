import * as S from './style'
import Task from './Task/Task';


const TaskList = () => {
  return (
    <S.ContainerTask>
      <Task /> <Task /> <Task /> <Task /> <Task /> <Task />
    </S.ContainerTask>
  )
}

export default TaskList