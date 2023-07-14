import React from 'react'
import "./Button.css"

const Button = (props) => {
  return (
    <button onChange={props.onChange} onClick={props.onClick} style={props.color}>{props.title}</button>
  )
}

export default Button