
'use client'

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import ItemForm from "@/components/ItemForm"
import ItemFeed from "@/components/ItemFeed"
const App = () => {
  const router = useRouter()
  // are we submitting the form?
  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState({
    item: ''
  })
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
        const filteredItems = items.filter((item) => item._id !== post._id)
        setPost(filteredItems)
        fetchItems()
      } catch (error) {
        console.log(error)
      }
    }

  }
  const fetchItems = async () => {
    const response = await fetch('/api/item')
    const data = await response.json()
    setItems(data)
  }
  useEffect(() => {
    fetchItems()
  }, [])
  const createItem = async (e) => {
    // this is to stop the default behaviour of the browser 
    // which is to do a reload
    e.preventDefault()
    // for a loader 
    setSubmitting(true)

    try {
      // call the api that we create
      // and pass the option object
      const response = await fetch('/api/item/new', {
        method: 'POST',
        body: JSON.stringify({
          // passing an object
          // where we pass the prompt which is equal to post.prompt
          item: post.item,
        })
      })
      if (response.ok) {
        // meaning, send to home page
        // router.push('/')
        console.log('submitted')
        setPost({ item: '' })
        fetchItems()
      }
    } catch (error) {
      console.log(error)
    }
    // finally will execute either way 
    finally {
      setSubmitting(false)
    }
  }
  return (
    <>
      <ItemForm
        type='Create'
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createItem}
      />
      <ItemFeed
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        items={items} />
    </>
  )
}


export default App