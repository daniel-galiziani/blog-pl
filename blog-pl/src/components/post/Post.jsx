import React from 'react'
import './post.css'

const Post = () => {
    return (
        <div className='post'>
            <img className='postImg' src="/images/pal_gre.jpeg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className='postCat'>Encontros</span>
                    <span className='postCat'>Londres</span>
                </div>
                <span className='postTitle'>
                    Lorem ipsum dolor sit !
                </span>
                <hr />
                <span className='postDate'>31/10/2021</span>
            </div>
            <p className='postDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et numquam qui dolorum soluta quasi provident voluptatibus unde fugiat at placeat, temporibus blanditiis aliquid a sunt, consequatur consequuntur atque ipsum? Iure?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et numquam qui dolorum soluta quasi provident voluptatibus unde fugiat at placeat, temporibus blanditiis aliquid a sunt, consequatur consequuntur atque ipsum? Iure?
            </p>
        </div>
    )
}

export default Post
