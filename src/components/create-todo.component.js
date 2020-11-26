import React, { Component } from 'react';

export default class CreateTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            responsible: '',
            priority: 'Low',
            completed: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        console.log(this.state);
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input 
                            type="text"
                            className="form-control"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                            placeholder="Enter a description"
                            required/>
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                            type="text"
                            className="form-control"
                            name="responsible"
                            value={this.state.responsible}
                            onChange={this.handleChange}
                            placeholder="Enter who is responsible"
                            required/>
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