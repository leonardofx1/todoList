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
    setTodoList(todoList.filter((todo: TaskType) => todo.id !== id));
  };

  const ChangeTaskStatus = (id: number) => {
    setTodoList(
      todoList
        .filter((todo: TaskType) => todo.id === id)
        .map((todo: TaskType): TaskType => {
          return { ...todo, completed: true };
        })
    );
  };

  return { setTodo, todo, todoList, addTodoList, removeTodo, ChangeTaskStatus };
};
