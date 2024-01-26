import React, { Component } from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState { title :string;description:string;dueDate:string}

export default class TaskForm extends Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);

    this.state = {
        title : "",
        description : "",
        dueDate : ""
    }
  }

  inputRef = React.createRef<HTMLInputElement>();

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate,
    };

    console.log(newTask)
    this.props.addTask(newTask);
    this.setState({ title: "",description: "",dueDate: "" });
  };
  handleChange : React.ChangeEventHandler<HTMLInputElement> = (e) =>{
    e.preventDefault();
    const {name,value} =  e.target;
    this.setState({...this.state, [name] : value})

  }

  render() {
    return (
      <form className="m-2 p-5 " onSubmit={this.addTask}>
        <input required id="todoTitle"
          className="w-full py-1 my-1 border border-gray-300 px-2.5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block "
          type="text" name="title" value={this.state.title} onChange={this.handleChange}  />
           <input  id="todoDescription"
          className="w-full py-1 my-1 border border-gray-300 px-2.5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block "
          type="text" name="description" value={this.state.description} onChange={this.handleChange}  />
           <input required id="todoDueDate"
          className="w-full py-1 my-1 border border-gray-300 px-2.5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block "
          type="date" name="dueDate" value={this.state.dueDate} onChange={this.handleChange}  />

        <button
          type="submit" id="addTaskButton"
          className="m-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 text-center flex items-center"
        >
          <i className='bx bx-plus'></i> New Task
        </button>
      </form>
    );
  }
}
