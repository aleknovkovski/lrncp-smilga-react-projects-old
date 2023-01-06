import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items}) => {
    const itemsMarkup = items.map((item)=>{
        return (
            <article className="grocery-item">
                <p className="title">{item}</p>
            </article>
        )
    })

  return (<>
      {itemsMarkup}
      <button className="clear-btn">clear items</button>
  </>)
}

export default List
