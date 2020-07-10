import { TodoProvider } from './todos/todo.context';
import { AboutProvider } from './about/about.context';
import React, { FunctionComponent } from 'react';

const AppContextProvider: FunctionComponent = (props: { children?: React.ReactNode }) => {
    return (
        <TodoProvider>
            <AboutProvider>
                {props.children}
            </AboutProvider>
        </TodoProvider>
    )
}

export default AppContextProvider;