import React from 'react'

export default function Task(props) {
  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
          <span style={{textDecoration:props.isDone ? "line-through": "none"}}>{props.title}</span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
        </div>
  )
}
