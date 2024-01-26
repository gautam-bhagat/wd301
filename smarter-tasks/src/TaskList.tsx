import {  } from "react";
import Task from "./Task";
import { TaskItem } from "./types";


interface Props {
  tasks: TaskItem[];
  onDelete: (index: number) => void;
}

function TaskList(props : Props) {

  const handleDelete = (index: number) => {
    props.onDelete(index);
  };

  return (
    <div>
      <ul>
      {
        props.tasks.map((item,id)=>{
          return (
            <li className="flex items-center" key={id}>
          <Task task={item} />
          <button
            className="deleteTaskButton  bg-red-600 text-white ml-1 p-4 rounded-sm mb-1 hover:bg-red-700"
            onClick={() => handleDelete(id)}
          >
            <i className='bx bxs-trash-alt'></i>
          </button>
          </li>
          );
        })
      }

      </ul>
    </div>
  )
}

export default TaskList
