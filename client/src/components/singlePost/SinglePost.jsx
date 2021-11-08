import React from 'react'
import './singlePost.css'

const SinglePost = () => {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img className='singlePostImg' src="/images/pal_gre.jpeg" alt="" />
                <h1 className="singlePostTitle">
                    Lorem, ipsum dolor
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Autor: <b>Alê</b></span>
                    <span className='singlePostDate'>31/10/2021</span>
                </div>
                <p className='singlePostText'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatibus perspiciatis dicta vitae eveniet corporis error placeat impedit quod ducimus, itaque labore fugiat molestias officiis praesentium repellendus! Necessitatibus ipsam quasi sunt asperiores quos? Harum in nulla tenetur? Architecto repudiandae, tempora laudantium dolorum nobis officia officiis totam neque mollitia corrupti! Eum similique at, molestias porro quibusdam fugiat cum, quasi quidem, doloremque sapiente error. Magnam quod aspernatur, praesentium odio dignissimos, necessitatibus facere consequatur, temporibus error ea suscipit vero. Magnam modi perspiciatis accusantium dolor assumenda voluptates. Excepturi aliquid facilis, architecto voluptatum, nobis, incidunt eum deserunt odit nam optio possimus commodi magnam necessitatibus fugiat.``
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatibus perspiciatis dicta vitae eveniet corporis error placeat impedit quod ducimus, itaque labore fugiat molestias officiis praesentium repellendus! Necessitatibus ipsam quasi sunt asperiores quos? Harum in nulla tenetur? Architecto repudiandae, tempora laudantium dolorum nobis officia officiis totam neque mollitia corrupti! Eum similique at, molestias porro quibusdam fugiat cum, quasi quidem, doloremque sapiente error. Magnam quod aspernatur, praesentium odio dignissimos, necessitatibus facere consequatur, temporibus error ea suscipit vero. Magnam modi perspiciatis accusantium dolor assumenda voluptates. Excepturi aliquid facilis, architecto voluptatum, nobis, incidunt eum deserunt odit nam optio possimus commodi magnam necessitatibus fugiat.``
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatibus perspiciatis dicta vitae eveniet corporis error placeat impedit quod ducimus, itaque labore fugiat molestias officiis praesentium repellendus! Necessitatibus ipsam quasi sunt asperiores quos? Harum in nulla tenetur? Architecto repudiandae, tempora laudantium dolorum nobis officia officiis totam neque mollitia corrupti! Eum similique at, molestias porro quibusdam fugiat cum, quasi quidem, doloremque sapiente error. Magnam quod aspernatur, praesentium odio dignissimos, necessitatibus facere consequatur, temporibus error ea suscipit vero. Magnam modi perspiciatis accusantium dolor assumenda voluptates. Excepturi aliquid facilis, architecto voluptatum, nobis, incidunt eum deserunt odit nam optio possimus commodi magnam necessitatibus fugiat.``
                </p>
            </div>
        </div>
    )
}

export default SinglePost
