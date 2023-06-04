'use client'

import { useState, useEffect } from "react"

function ItemFeed() {
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch('/api/item')
            const data = response.json()
            setItems(data)
        }
        fetchItems()
    }, [])
    return (
        <div>ItemFeed</div>
    )
}

export default ItemFeed