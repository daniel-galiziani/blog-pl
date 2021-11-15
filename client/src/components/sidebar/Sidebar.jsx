import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const [cats, setCats] = useState([])


    useEffect(()=>{
        const getCats = async ()=>{
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats()
    }, [])
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className='sidebarTitle'>SOBRE</span>
                <img className='sidebarImg' src="/images/palmeiras-londres-logo-2.jpeg" alt="" />
                <p className='sidebarText'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloremque quam provident vero nihil sequi fugiat quo optio itaque, vel commodi inventore nam quae ad, esse sint incidunt repudiandae fuga.
                </p>
            </div>
            {/* <div className="sidebarItem">
                <span className='sidebarTitle'>CATEGORIAS</span>
                <ul className="sidebarList">
                    {cats.map((c)=>(
                        <Link to={`/?cat=${c.name}`} className='link'>
                        <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                    
                </ul>
            </div> */}
            <div className="sidebarItem">
            <span className='sidebarTitle'>MEDIA SOCIAL</span>
            <div className="sidebarSocial">
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
            </div>
        </div>
    )
}

export default Sidebar
