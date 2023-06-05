'use client'
// import { useState } from 'react'
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import ItemForm from "@/components/ItemForm"
const EditItem = () => {
    const [post, setPost] = useState({
        item: ''
    })
    const [submitting, setSubmitting] = useState(false)
    const router = useRouter()
    const searchParams = useSearchParams()
    const itemId = searchParams.get('id')


    useEffect(() => {
        const getItemDetails = async () => {
            const response = await fetch(`/api/item/${itemId}`)
            const data = await response.json()
            setPost(data)
        }
        if (itemId) getItemDetails()
    }, [itemId])
    
    const updateItem = async (e) => {
        e.preventDefault()
        // for a loader 
        setSubmitting(true)
        if(!itemId) return alert('item id not found')
        try {
            // call the api that we create
            // and pass the option object
            const response = await fetch(`/api/item/${itemId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    item: post.item,
                })
            })
            if (response.ok) {
                // meaning, send to home page
                 router.push('/')
                console.log('submitted')
            }
        } catch (error) {
            console.log('error', error)
        }
        finally {
            setSubmitting(false)
        }
    }

    return (
        <div>
            <ItemForm
                type='Edit'
                post={post}
                setPost={setPost}
                handleSubmit={updateItem}
            />
        </div>
    )
}

export default EditItem