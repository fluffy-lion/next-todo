
// import { useState } from 'react'

const ItemForm = ({
    type,
    post,
    setPost,
    submitting,
    handleSubmit
}) => {


    return (
        <div>
            <form
                onSubmit={handleSubmit}
            >
                <h1>{type} form</h1>
                <label>
                    <textarea
                        value={post.item}
                        onChange={(e) => setPost({ ...post, item: e.target.value })}
                        placeholder="add your item / task here"
                        required
                    />
                </label>
                <button 
                type="submit"
                disabled={submitting}
                >
                    {/* {submitting && `${type}...`} */}
                    submit
                </button>
            </form>
        </div>
    )
}

export default ItemForm