import React, { FunctionComponent, useState, useContext } from "react";
import Todo from "./todo-list-item.component";
import TodoContext, { ITodoContext, TodoProvider } from "./todo.context";

const TodoList: FunctionComponent = () => {
    const [labelInput, setLabel] = useState<string>("");
    const context: ITodoContext = useContext<ITodoContext>(TodoContext);
    const onAdd = (): void => {
        context.addTodo(labelInput);
        setLabel("");
    };
    const todoIds = Object.keys(context.todos);

    return (
        <div>
            <input placeholder="What needs done?" value={labelInput} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLabel(event.currentTarget.value)} />
            <button id="add-button" disabled={labelInput == ""} onClick={onAdd}>Add</button>
            <ul>
                {todoIds.map((id: string) => <Todo key={id} id={id} label={context.todos[id].label} />)}
            </ul>
        </div>
    );
}

const TodoListWithProvider: FunctionComponent = () => {
    return (
        <TodoProvider>
            <TodoList />
        </TodoProvider>
    );
}

export default TodoList;