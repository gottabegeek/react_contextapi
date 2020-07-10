import React, { FunctionComponent, useState } from "react";
import { ITodoStore, ITodo } from "./todo";
import { Guid } from 'guid-typescript';

export interface ITodoContext {
    todos: ITodoStore,
    addTodo: (label: string) => void,
    removeTodo: (id: string) => void;
}

const TodoContext = React.createContext<ITodoContext>(
    {
        todos: {},
        addTodo: (label: string): void => { },
        removeTodo: (id: string): void => { },
    }
);

export const TodoProvider: FunctionComponent = (props: { children?: React.ReactNode }) => {
    const [todos, setTodos] = useState<ITodoStore>({});
    const addTodo = (label: string): void => {
        const id: string = Guid.create().toString();
        const newTodo: ITodo = { id, label };
        const updatedTodos = { ...todos, [id]: newTodo };
        setTodos(updatedTodos);
    };
    const removeTodo = (id: string): void => {
        const newTodos = { ...todos };
        delete newTodos[id];
        setTodos(newTodos);
    };
    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoContext;