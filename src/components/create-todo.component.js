import React, { useState } from 'react';
import axios from 'axios';

export default function CreateTodo() {

    const [values, setValues] = useState({
        description: '',
        responsible: '',
        priority: 'Low',
        completed: false
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setValues((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const todo = {
            description: values.description,
            responsible: values.responsible,
            priority: values.priority,
            completed: values.completed
        }
        console.log(todo);
        axios.post(process.env.REACT_APP_SERVER_ADDR + 'todos/add', todo)
            .then(res => console.log(res.data));

        window.location = "/";
    }

    return (
        <div>
            <h3>Create New Todo</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Description: </label>
                    <input 
                        type="text"
                        className="form-control"
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        placeholder="Enter a description"
                        required/>
                </div>
                <div className="form-group">
                    <label>Responsible: </label>
                    <input 
                        type="text"
                        className="form-control"
                        name="responsible"
                        value={values.responsible}
                        onChange={handleChange}
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
                                checked={values.priority === 'Low'}
                                onChange={handleChange}/>
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
                                checked={values.priority === 'Medium'}
                                onChange={handleChange}/>
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
                                checked={values.priority === 'High'}
                                onChange={handleChange}/>
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

// import React, { Component } from 'react';
// import axios from 'axios';

// export default class CreateTodo extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             description: '',
//             responsible: '',
//             priority: 'Low',
//             completed: false
//         }

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         const {name, value} = event.target
//         this.setState({
//             [name]: value
//         })
//     }

//     handleSubmit(event) {
//         event.preventDefault();

//         const todo = {
//             description: this.state.description,
//             responsible: this.state.responsible,
//             priority: this.state.priority,
//             completed: this.state.completed
//         }
//         console.log(todo);
//         axios.post(process.env.REACT_APP_SERVER_ADDR + 'todos/add', todo)
//             .then(res => console.log(res.data));

//         window.location = "/";
//     }

//     render() {
//         return (
//             <div>
//                 <h3>Create New Todo</h3>
//                 <form onSubmit={this.handleSubmit}>
//                     <div className="form-group">
//                         <label>Description: </label>
//                         <input 
//                             type="text"
//                             className="form-control"
//                             name="description"
//                             value={this.state.description}
//                             onChange={this.handleChange}
//                             placeholder="Enter a description"
//                             required/>
//                     </div>
//                     <div className="form-group">
//                         <label>Responsible: </label>
//                         <input 
//                             type="text"
//                             className="form-control"
//                             name="responsible"
//                             value={this.state.responsible}
//                             onChange={this.handleChange}
//                             placeholder="Enter who is responsible"
//                             required/>
//                     </div>
//                     <div className="form-group">
//                         <div className="form-check form-check-inline">
//                             <label className="form-check-label">
//                                 <input 
//                                     type="radio"
//                                     className="form-check-input"
//                                     name="priority"
//                                     value="Low"
//                                     checked={this.state.priority === 'Low'}
//                                     onChange={this.handleChange}/>
//                                 Low
//                             </label>
//                         </div>
//                         <div className="form-check form-check-inline">
//                             <label className="form-check-label">
//                                 <input 
//                                     type="radio"
//                                     className="form-check-input"
//                                     name="priority"
//                                     value="Medium"
//                                     checked={this.state.priority === 'Medium'}
//                                     onChange={this.handleChange}/>
//                                 Medium
//                             </label>
//                         </div>
//                         <div className="form-check form-check-inline">
//                             <label className="form-check-label">
//                                 <input 
//                                     type="radio"
//                                     className="form-check-input"
//                                     name="priority"
//                                     value="High"
//                                     checked={this.state.priority === 'High'}
//                                     onChange={this.handleChange}/>
//                                 High
//                             </label>
//                         </div>
//                     </div>

//                     <div className="form-group">
//                         <input 
//                             type="submit"
//                             className="btn btn-primary"/>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }