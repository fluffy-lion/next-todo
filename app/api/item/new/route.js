import { connectToDB } from "@/utils/database"
import Item from "@/models/item"
export const POST = async (req, res) => {
    // extract the data that you pass through the post request
    const { item } = await req.json()

    try {
        // we connect to the db
        // have to do this every time because it 
        // is a lambda function
        // its going to die once it does its job
        await connectToDB()
        const newItem = new Item({
            item
        })
        // created 
        await newItem.save()
        //  returned a new reposnse and specified a new reponse
        // 201 means created
        return new Response(JSON.stringify(newItem), {
            status: 201
        })
    } catch (error) {
        return new Response('failed to create a new item', {
            // server error
            status: 500
        })
    }
}