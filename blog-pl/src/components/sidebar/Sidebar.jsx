import React from 'react'
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className='sidebarTitle'>SOBRE</span>
                <img className='sidebarImg' src="/images/palmeiras-londres-logo-2.jpeg" alt="" />
                <p className='sidebarText'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloremque quam provident vero nihil sequi fugiat quo optio itaque, vel commodi inventore nam quae ad, esse sint incidunt repudiandae fuga.
                </p>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle'>CATEGORIAS</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Jogos</li>
                    <li className="sidebarListItem">Notícias</li>
                    <li className="sidebarListItem">Encontros</li>
                    <li className="sidebarListItem">Palmeiras</li>
                    <li className="sidebarListItem">Londres</li>
                    <li className="sidebarListItem">Mais</li>
                </ul>
            </div>
            <div className="sidebarItem">
            <span className='sidebarTitle'>MEDIA SOCIAL</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-whatsapp-square"></i>
            </div>
            </div>
        </div>
    )
}

export default Sidebar
