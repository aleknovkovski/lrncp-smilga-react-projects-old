import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items}) => {
  return (
      items.map((item)=>{
        return (
        <article className="grocery-item">
            <p className="title">{item}</p>
        </article>
        )
      })
  )
}

export default List
