import React, { Component } from 'react'
import "./TaskCard.css";

interface TaskProp  {
  task : {title :string,
    description :string,
    dueDate :string,}
}

export default class Task extends Component <TaskProp>{


  render() {
    return (
      <div className="TaskItem shadow-md border border-slate-100">
        <h3 className="text-base font-bold my-1">{this.props.task.title} ( {(this.props.task.dueDate)} )</h3>
        {this.props.task.description}
        
      </div>
    )
  }
}
