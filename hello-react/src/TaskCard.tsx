import React from 'react'
import './TaskCard.css' 

const TaskCard = (props) => {
    // eslint-disable-next-line react/prop-types
    const { dueDate,completedAtDate, title, assigneeName } = props
    const displayDate = completedAtDate  ? `Completed on: ${completedAtDate}` : `Due on: ${dueDate}`
  
    return (
      <div className='TaskItem'>
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{displayDate}</p>
        <p>Assignee: {assigneeName}</p>
      </div>
    )
  }

export default TaskCard
