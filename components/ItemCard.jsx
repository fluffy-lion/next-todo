import React from 'react'

function ItemCard({ item, handleDelete, handleEdit }) {
  return (
    <div>
        <span>{item.item}</span>
        <div>
            <button onClick={handleEdit}>edit</button>
            <button onClick={handleDelete}>delete</button>
        </div>    
    </div>
  )
}

export default ItemCard