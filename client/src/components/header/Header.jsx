import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className='headerTitleSm'>Palmeiras Londres</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img className='headerImg' src="/images/torcida.jpeg" alt="" />
        </div>
    )
}

export default Header
