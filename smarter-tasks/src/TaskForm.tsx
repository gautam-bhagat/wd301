import React, {  useState } from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  id : number;
  title: string;
  description: string;
  dueDate: string;
}

function TaskForm(props: TaskFormProps) {
  const { addTask } = props;

  
  const submitForm: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();


    // console.log(formState);
    addTask(formState);
    setFormState({id :0, title: "", description: "", dueDate: "" });
  };
  
  const [formState, setFormState] = useState<TaskFormState>({
    id:0,
    title: "",
    description: "",
    dueDate: "",
  });
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  return (
   
      <form className="m-2 p-5 " onSubmit={submitForm}>
        <input
          required
          id="todoTitle"
          className="w-full py-1 my-1 border border-gray-300 px-2.5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block "
          type="text"
          name="title" placeholder="Title"
          value={formState.title}
          onChange={handleChange}
        />
        <input
          id="todoDescription"
          className="w-full py-1 my-1 border border-gray-300 px-2.5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block "
          type="text"
          name="description" placeholder="Description"
          value={formState.description}
          onChange={handleChange}
        />
        <input
          required
          id="todoDueDate"
          className="w-full py-1 my-1 border border-gray-300 px-2.5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block "
          type="date" placeholder="Date"
          name="dueDate"
          value={formState.dueDate}
          onChange={handleChange}
        />

        <button
          type="submit"
          id="addTaskButton"
          className="m-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 text-center flex items-center"
        >
          <i className="bx bx-plus"></i> New Task
        </button>
      </form>
    
  );
}

export default TaskForm;
