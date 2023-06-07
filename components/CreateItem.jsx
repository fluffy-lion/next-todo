import React from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import ItemForm from "@/components/ItemForm"
const CreateItem = ({ fetchItems }) => {
    const router = useRouter()
    // are we submitting the form?
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
      item: ''
    })
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
    <ItemForm
        type='Create'
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createItem}
      />
  )
}

export default CreateItem