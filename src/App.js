import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/navbar.component';
import TodosList from './components/todos-list.component';
import EditTodo from './components/edit-todo.component';
import CreateTodo from './components/create-todo.component';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Navbar />
                    <br/>
                    <Route path="/" exact component={TodosList} />
                    <Route path="/edit/:id" component={EditTodo} />
                    <Route path="/create" component={CreateTodo} />
                </div>
            </Router>
        )
    }
}

export default App;
