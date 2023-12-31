import { useTodoList } from "./useTodoList";

import * as S from "./style";
import TaskList from "../TaskList";
import { MdPlaylistAdd } from "react-icons/md";
import { ChangeEvent } from "react";
import { TaskType } from "../../../types/types";

const Form = () => {
  const {
    setTodo,
    todo,
    todoList,
    addTodoList,
    removeTodo,
    ChangeTaskStatus,
    editFromTask,
  } = useTodoList();

  const handleChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
    console.log(todoList);
  };
  const handleAddTodoList = (e: React.MouseEvent) => {
    e.preventDefault();
    addTodoList(todo);
    setTodo("");
  };
  return (
    <S.Main>
      <S.Form>
        <label htmlFor="tarefas">
          criar tarefas
          <S.ContainerInput>
            <input
              onChange={handleChangeTodo}
              value={todo}
              type="text"
              name="tarefas"
              id="tarefas"
              placeholder="criar tarefa"
            />
            <button
              onClick={handleAddTodoList}
              disabled={todo.length < 1 ? true : false}
            >
              <MdPlaylistAdd />
            </button>
          </S.ContainerInput>
        </label>
      </S.Form>
      {todoList.length > 0 && (
        <S.ContainerTask>
          {todoList.map((task: TaskType) => (
            <TaskList
              task={task}
              removeFromTask={removeTodo}
              changeTaskStatus={ChangeTaskStatus}
              editFromTask={editFromTask}
            />
          ))}
        </S.ContainerTask>
      )}
    </S.Main>
  );
};

export default Form;
