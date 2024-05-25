import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  description: string;
  dueDate: string;
  error: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      dueDate: "",
      error: "",
    };
  }

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const { title, description, dueDate } = this.state;

    if (!title || !dueDate) {
      this.setState({ error: "Title and Due Date are required." });
      return;
    }

    const newTask = {
      title,
      description,
      dueDate,
    };

    this.props.addTask(newTask);
    this.setState({ title: "", description: "", dueDate: "", error: "" });
  };

  handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    this.setState({ [name]: value } as Pick<
      TaskFormState,
      keyof TaskFormState
    >);
  };

  render() {
    return (
      <form onSubmit={this.addTask} className="">
        <input
          type="text"
          placeholder="Title"
          id="todoTitle"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          className="border border-slate-300 w-full rounded-md mt-2 p-2"
        />
        <input
          type="text"
          placeholder="Description"
          id="todoDescription"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
          className="border border-slate-300 w-full mt-2 rounded-md p-2"
        />

        <input
          type="date"
          placeholder="Due Date"
          id="todoDueDate"
          name="dueDate"
          value={this.state.dueDate}
          onChange={this.handleChange}
          className="border border-slate-300 w-full mt-2 rounded-md p-2"
        />

        {this.state.error && <p className="text-red-500">{this.state.error}</p>}
        <button
          type="submit"
          id="addTaskButton"
          className="bg-green-500 text-white mt-2 rounded-md py-2 px-4"
        >
          Add Task
        </button>
      </form>
    );
  }
}

export default TaskForm;
