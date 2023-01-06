import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items, handleClearing, handleChanges}) => {
    const itemsMarkup = items.map((item)=>{
        return (
            <article className="grocery-item" key={item.id}>
                <p className="title">{item.title}</p>
                <div className="btn-container">
                    <button
                        className="edit-btn"
                        onClick={()=> handleChanges(item.id, "edit")}
                    >
                        <FaEdit/>
                    </button>
                    <button
                        className="delete-btn"
                        onClick={()=> handleChanges(item.id, "delete")}
                    >
                        <FaTrash/>
                    </button>
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
