'use client'

import { useState, useEffect } from "react"
import ItemCard from "./ItemCard"

function ItemFeed({ items }) {
   

    
    return (
        <>
        {items ? 
        items.map((item) => {
            return <ItemCard key={item._id} item={item} />
        }) : <div> </div>
        }
        </>
    )
}

export default ItemFeed