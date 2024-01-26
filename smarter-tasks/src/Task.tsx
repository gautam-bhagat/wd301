import React from 'react'
import "./TaskCard.css";

interface TaskProp  {
  task : {title :string,
    description :string,
    dueDate :string,}
}

function Task(props: TaskProp) {
  return (
    <div className="TaskItem shadow-md w-5/6 border border-slate-100">
      <h2 className="text-base font-bold my-1">{props.task.title}</h2>
      <p className="text-sm text-slate-500">{props.task.dueDate}</p>
      <p className="text-sm text-slate-500">
        Description: {props.task.description}
      </p>
    </div>
  );
}

export default Task
