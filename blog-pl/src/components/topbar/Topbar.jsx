import React from 'react'
import './topbar.css'

const Topbar = () => {
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-whatsapp-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem'>HOME</li>
                    <li className='topListItem'>SOBRE</li>
                    <li className='topListItem'>CONTATO</li>
                    <li className='topListItem'>ESCREVER</li>
                    <li className='topListItem'>LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img className='topImg' src="/images/daniel-profile.jpeg" alt="" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>

        </div>
    )
}

export default Topbar
