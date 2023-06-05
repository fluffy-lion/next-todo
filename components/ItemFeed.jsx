'use client'

import { useState, useEffect } from "react"
import ItemCard from "./ItemCard"

function ItemFeed({ items, handleEdit, handleDelete }) {
    
    return (
        <>
        {items ? 
        items.map((item) => {
            return <ItemCard key={item._id} item={item} handleEdit={() => handleEdit && handleEdit(item)}  handleDelete={() => handleDelete && handleDelete(item)}/>
        }) : <div> </div>
        }
        </>
    )
}

export default ItemFeed