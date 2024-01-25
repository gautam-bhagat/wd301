import React, { Component } from "react";

interface TaskFormProps {}

interface TaskFormState {}

export default class TaskForm extends Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
  }

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    console.log("Submitted the form!");
  };

  render() {
    return (
      <form className="m-2 p-5 w-1/2 " onSubmit={this.addTask}>
        <input
          className="w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"
          type="text"
        />
        <button
          type="submit"
          className="m-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Add item
        </button>
      </form>
    );
  }
}
