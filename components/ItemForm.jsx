
// import { useState } from 'react'

const ItemForm = ({
    type,
    post,
    setPost,
    submitting,
    handleSubmit
}) => {


    return (
        <div className="bg-gradient-to-r from-slate-500/10 from-1% to-slate-100/10 to-90% py-10 px-10 rounded-lg">
            <h1 className="text-slate-50">{type} Item</h1>
            <form
                onSubmit={handleSubmit}
                className="flex-auto content-center border-white border-4"
            >
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
                className="bg-green-400 py-1 px-2 rounded-lg text-slate-800 font-medium border-white border-1"
                >
                    {/* {submitting && `${type}...`} */}
                    submit
                </button>
            </form>
        </div>
    )
}

export default ItemForm