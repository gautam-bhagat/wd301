import React from "react";
import "./TaskCard.css";
import { Link } from "react-router-dom";

interface TaskProp {
  task: { id: number; title: string; description: string; dueDate: string };
}

function Task(props: TaskProp) {
  return (
    
      <div className="TaskItem shadow-md w-5/6 border border-slate-100">
        <Link to={`/tasks/${props.task.id}`}>
        <h2 className="text-base font-bold my-1">{props.task.title}</h2>
        <p className="text-sm text-slate-500">{props.task.dueDate}</p>
        <p className="text-sm text-slate-500">
          Description: {props.task.description}
        </p>
        </Link>
      </div>
   
  );
}

export default Task;
