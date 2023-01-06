import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items}) => {
    const itemsMarkup = items.map((item)=>{
        return (
            <article className="grocery-item">
                <p className="title">{item}</p>
                <div className="btn-container">
                    <button className="edit-btn"><FaEdit/></button>
                    <button className="delete-btn"><FaTrash/></button>
                </div>
            </article>
        )
    })

  return (<>
      {itemsMarkup}
      <button className="clear-btn">clear items</button>
  </>)
}

export default List
