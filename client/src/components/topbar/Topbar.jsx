import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './topbar.css'

const Topbar = () => {
    const { user, dispatch } = useContext(Context)
    const PF = "http://localhost:1000/images/"

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }

    return (
        <div className='top'>
            <div className="topLeft">
                <a 
                    href="https://www.facebook.com/palmeiraslondres" 
                    rel="noreferrer" 
                    target="_blank">
                        <i className="topIcon fab fa-facebook-square"></i>
                </a>
                <a 
                    href="https://www.instagram.com/palmeiras_londres/" 
                    rel="noreferrer" 
                    target="_blank">
                        <i className="topIcon fab fa-instagram-square"></i>
                </a>
                <a 
                    href="https://twitter.com/" 
                    rel="noreferrer" 
                    target="_blank">
                        <i className="topIcon fab fa-twitter-square"></i>
                </a>
               
                
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem'><Link className='link' to='/'>HOME</Link></li>
                    <li className='topListItem'><Link className='link' to='/about'>SOBRE</Link></li>
                    <li className='topListItem'><Link className='link' to='/write'>ESCREVER</Link></li>
                    <li className='topListItem' onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <Link to='/settings'>
                            <img className='topImg' src={PF+user.profilePic} alt="" />
                        </Link>
                    ) : (
                        <ul className='topList'>
                            <li className='topListItem'>
                                <Link className='link' to='/login'>LOGIN</Link>
                            </li>
                            <li className='topListItem'>
                                <Link className='link' to='/register'>REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
                
                {/* <i className="topSearchIcon fas fa-search"></i> */}
            </div>

        </div>
    )
}

export default Topbar
