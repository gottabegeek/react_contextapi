import React, { Component, Context } from "react";
import "./todo.css";
import TodoContext, { ITodoContext } from "./todo.context";

export interface ITodoListItemProps {
    id: string;
    label: string;
};

export class TodoListItem extends Component<ITodoListItemProps> {
    public static contextType: Context<ITodoContext> = TodoContext;

    public constructor(props: ITodoListItemProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="todo-item">
                <div>{this.props.label}</div>
                <div><button onClick={() => this.context.removeTodo(this.props.id)}>Delete</button></div>
            </div>
        );
    }
}

export default TodoListItem;