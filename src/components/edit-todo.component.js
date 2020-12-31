import React, { Component } from 'react';
import axios from 'axios';

export default class EditTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            responsible: '',
            priority: '',
            completed: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(process.env.REACT_APP_SERVER_ADDR + 'todos/' + id)
            .then(response => {
                const { description: d, responsible: r, priority: p, completed: c } = response.data;
                this.setState({
                    description: d,
                    responsible: r,
                    priority: p,
                    completed: c
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    handleChange(event) {
        const {name, type, value, checked} = event.target
        this.setState({
            [name]: (type === "checkbox") ? checked : value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const { id } = this.props.match.params;
        const todo = {
            description: this.state.description,
            responsible: this.state.responsible,
            priority: this.state.priority,
            completed: this.state.completed
        }
        console.log(todo);
        axios.post(process.env.REACT_APP_SERVER_ADDR + 'todos/update/' + id, todo)
            .then(res => console.log(res.data));

        window.location = "/";
    }

    render() {
        return (
            <div>
                <h3>Update Todo</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input 
                            type="text"
                            className="form-control"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                            type="text"
                            className="form-control"
                            name="responsible"
                            value={this.state.responsible}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input 
                                    type="radio"
                                    className="form-check-input"
                                    name="priority"
                                    value="Low"
                                    checked={this.state.priority === 'Low'}
                                    onChange={this.handleChange}/>
                                Low
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input 
                                    type="radio"
                                    className="form-check-input"
                                    name="priority"
                                    value="Medium"
                                    checked={this.state.priority === 'Medium'}
                                    onChange={this.handleChange}/>
                                Medium
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input 
                                    type="radio"
                                    className="form-check-input"
                                    name="priority"
                                    value="High"
                                    checked={this.state.priority === 'High'}
                                    onChange={this.handleChange}/>
                                High
                            </label>
                        </div>
                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label">
                            <input 
                                type="checkbox"
                                className="form-check-input"
                                name="completed"
                                checked={this.state.completed}
                                onChange={this.handleChange}/>
                            Completed
                        </label>
                    </div>
                    <div className="form-group">
                        <input 
                            type="submit"
                            className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}