import {  } from "react";
import Task from "./Task";
import { TaskItem } from "./types";


interface Props {
  tasks: TaskItem[];
}

function TaskList(props : Props) {
  return (
    <div>
      {
        props.tasks.map((item,id)=>{
          return <Task key={id} task={item} />;
        })
      }
    </div>
  )
}

export default TaskList
