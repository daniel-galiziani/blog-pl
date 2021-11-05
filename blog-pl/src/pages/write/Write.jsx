import React from 'react'
import './write.css'

const Write = () => {
    return (
        <div className='write'>
            <img className='writeImg' src="/images/pal_int.jpeg" alt="" />
            <form action="" className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:'none'}} />
                    <input type="text" placeholder='Título' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea 
                        placeholder='Conte aqui sua história...' 
                        type='text' 
                        className='writeInput writeText'
                    ></textarea>
                </div>
                <button className='writeSubmit'>
                    Postar
                </button>
            </form>
        </div>
    )
}

export default Write
