import React, { FunctionComponent, useContext } from "react";
import TodoContext, { ITodoContext } from "./todo.context";
import "./todo.css";

export interface ITodoListItemProps {
    id: string;
    label: string;
};

const TodoListItem: FunctionComponent<ITodoListItemProps> = (props: ITodoListItemProps) => {
    const context: ITodoContext = useContext<ITodoContext>(TodoContext);
    return (
        <div className="todo-item">
            <div>{props.label}</div>
            <div><button onClick={() => context.removeTodo(props.id)}>Delete</button></div>
        </div>
    );
}

export default TodoListItem;