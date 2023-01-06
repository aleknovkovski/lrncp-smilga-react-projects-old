import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items, handleClearing}) => {
    const itemsMarkup = items.map((item)=>{
        return (
            <article className="grocery-item">
                <p className="title">{item.title}</p>
                <div className="btn-container">
                    <button className="edit-btn"><FaEdit/></button>
                    <button className="delete-btn"><FaTrash/></button>
                </div>
            </article>
        )
    })

  return (<>
      {itemsMarkup}
      <button className="clear-btn" onClick={handleClearing}>clear items</button>
  </>)
}

export default List
