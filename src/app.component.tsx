import React, { FunctionComponent } from "react";
import { hot } from "react-hot-loader";
import About from "./about/about.component";
import { Route, HashRouter, Link } from "react-router-dom";
import TodoList from "./todos/todo-list.component";
import "./app.css";
import AppContextProvider from "./app.provider";

const App: FunctionComponent = () => {
    return (
        <AppContextProvider>
            <main id="main" tabIndex={-1}>
            <HashRouter>
                <nav>
                    <ul className="nav-list">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
                <Route exact path="/" component={TodoList} />
                <Route path="/about" component={About} />
            </HashRouter>
        </main>
        </AppContextProvider>
    );
}

export default hot(module)(App);