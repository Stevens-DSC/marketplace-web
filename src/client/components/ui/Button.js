import React,{Component} from "react"
import Link from 'next/link'

const Button = ({onClick,name}) => {
  return (
    <div onClick={onClick}>{name}</div>
  )
}
export default Button
