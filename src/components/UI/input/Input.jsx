import React from 'react'
import "./Input.css"

const Input = (props) => {
  return (
    <input min={props.min} max={props.max} onChange={props.value} id={props.id} type={props.inputType} />
  )
}

export default Input