import { connectToDB } from "@/utils/database"
import Item from "@/models/item"
// GET to read
// params is the dynamic ID
// (why folder name is [id])
export const GET = async (request, { params }) => {
    try {
        await connectToDB()
        // find all
        const item = await Item.findById(params.id)
        if (!item) return new Response('item not found', { status: 404 })


        return new Response(JSON.stringify(item), {
            status: 200
        })
    } catch (error) {
        return new Response('failed to fetch all items', {
            status: 500
        })
    }
}
// patch to update
export const PATCH = async (request, { params }) => {
    const { item } = await request.json()
    try {
        await connectToDB()
        const exsistingItem = await Item.findById(params.id)
        if (!exsistingItem) return new Response('item not found', { status: 404 })
        exsistingItem.item = item
        await exsistingItem.save()

        // my mistake
        // return new Response(JSON.stringigy(exsistingItem), { status: 200 })
        
        return new Response('item updated', { status: 200 })
    } catch (error) {
        return new Response('failed to update item', { status: 500 })
    }
}
// delete to delete it
export const DELETE = async (request, { params }) => {
    try {
        await connectToDB()
        await Item.findByIdAndRemove(params.id)

        return new Response('deleted item', { status: 200 })
    } catch (error) {
        return new Response('failed to delete item', { status: 500 })
    }
}