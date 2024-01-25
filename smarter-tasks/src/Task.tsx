import React, { Component } from 'react'

interface TaskProp  {
  title :string,
}

export default class Task extends Component <TaskProp>{


  render() {
    return (
      <div className='text-3xl'>
      <b>  { this.props.title }</b>
      </div>
    )
  }
}
