import { useState } from "react";
import { TaskType } from "../../../types/types";

export const useTodoList = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<TaskType[]>([]);

  const addTodoList = (newTodo: string): void => {
    const randomId: number = Math.random() * 1000;
    const creatTodo: TaskType = {
      id: randomId,
      textTask: newTodo,
      completed: false,
    };
    setTodoList((prev) => [...prev, creatTodo]);
  };

  const removeTodo = (id: number) => {
    const removeTask = (todo: TaskType) => todo.id !== id
    setTodoList(prevState => prevState.filter(removeTask))
  };

  const ChangeTaskStatus = (id: number) => {
    const updateTask = (todo: TaskType): TaskType => todo.id === id ? { ...todo, completed: !todo.completed }: todo
    setTodoList(prevState =>  prevState.map(updateTask))

  };

  const editFromTask = (id:number, newText:string) => {

    setTodoList(prevState => prevState.map(todo=> todo.id === id ? {...todo, textTask:newText}: todo))
    console.log(newText,todoList, id)
  }

  return { setTodo, todo, todoList, addTodoList, removeTodo, ChangeTaskStatus, editFromTask};
};
