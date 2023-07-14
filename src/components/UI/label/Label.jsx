import React from 'react'
import "./Label.css"

const Label = (props) => {
  return (
    <label htmlFor={props.htmlFor}>{props.title}</label>
  )
}

export default Label