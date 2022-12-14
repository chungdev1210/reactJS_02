import React, { Component } from 'react'
import getContext from '../../Context/getContext';
import { v4 as uniqueId } from 'uuid';

export class AddToDo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            jobName: ''
        }


    }

    handleAddToDo = (e) => {
        e.preventDefault();
        const { jobName } = this.state;

        const { addTodo } = this.props.store;

        if (jobName !== '') {
            addTodo({
                id: uniqueId(),
                name: jobName,
                isCompleted: false
            });

        } else {
            alert('Vui lòng nhập tên công việc');
        }

        this.resetForm();
    }

    handleChangeValue = (e) => {
        this.setState({
            jobName: e.target.value
        })
    }

    resetForm = () => {
        this.setState({
            jobName: ''
        })
    }

    render() {

        const { jobName } = this.state;

        return (
            <form onSubmit={this.handleAddToDo}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Tên công việc..."
                        onChange={this.handleChangeValue}
                        value={jobName}
                    />
                    <button type="submit" className="btn btn-primary">
                        Thêm
                    </button>
                </div>
            </form>
        )
    }
}

export default getContext(AddToDo)