export type TaskType = {
    textTask: string
    id: number
    completed: boolean
}
export type TaskProps = {
    task: TaskType
    removeFromTask: (id: number) => void
    changeTaskStatus: (id: number) => void
    editFromTask: (id: number, newText: string) => void

};

export type ModalProps = {
    id: number;
    todo: TaskType;
    setShowModal: (arg: boolean) => void;
    editFromTask: (id: number, newText: string) => void;
};