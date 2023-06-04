import { connectToDB } from "@/utils/database"
import Item from "@/models/item"

export const GET = async (request) => {
    try {
        await connectToDB()
                                // find all
        const items = await Item.find({}).populate('item')

        return new Response(JSON.stringify(items), {
            status: 200
        })
    } catch (error) {
        return new Response('failed to fetch all items', {
            status: 500
        })
    }
}