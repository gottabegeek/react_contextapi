export interface ITodo {
    id: string;
    label: string;
}

export interface ITodoStore {
    [id: string]: ITodo;
}