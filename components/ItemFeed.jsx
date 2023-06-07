'use client'

import { useState, useEffect } from "react"
import ItemCard from "./ItemCard"
import CreateItem from "./CreateItem"

function ItemFeed() {
    const [items, setItems] = useState([])

    const handleEdit = (item) => {
        router.push(`/update-item?id=${item._id}`)
      }
      const handleDelete = async (item) => {
        const hasConfirmed = confirm('delete item?')
        if(hasConfirmed) {
          try {
            await fetch(`api/item/${item._id.toString()}`, {
              method: 'DELETE'
            })
            const filteredItems = items.filter((i) => i._id !== item._id)
            setItems(filteredItems)
            // fetchItems()
          } catch (error) {
            console.log(error)
          }
        }
    
      }
      let fetchItems = async () => {
        const response = await fetch('/api/item')
        const data = await response.json()
        setItems(data)
      }
    useEffect(() => {
   
        fetchItems()
    },[])
    return (
        <>
        <CreateItem fetchItems={fetchItems}/>
            {items ?
                items.map((item) => {
                    return <ItemCard 
                    key={item._id} 
                    item={item} 
                    handleEdit={() => handleEdit && handleEdit(item)} 
                    handleDelete={() => handleDelete && handleDelete(item)} 
                    />
                }) : <div> </div>
            }
        </>
    )
}

export default ItemFeed