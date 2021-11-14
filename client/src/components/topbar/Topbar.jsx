import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './topbar.css'

const Topbar = () => {
    const { user, dispatch } = useContext(Context)

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }
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
                        <img className='topImg' src={user.profilePic} alt="" />
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
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>

        </div>
    )
}

export default Topbar
