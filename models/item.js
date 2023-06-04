import { Schema, model, models } from "mongoose";

const ItemSchema = new Schema({

    item: {
        type: String,
        required: [true, 'item is required']
    }
})

// get the item that  already exists or create a new model that is called item
// based on the item schema 
const Item = models.Prompt || model('Item', ItemSchema)

export default Item