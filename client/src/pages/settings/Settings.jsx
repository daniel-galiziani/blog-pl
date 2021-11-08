import React from 'react'
import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'


const Settings = () => {
    return (
            <div className="settings">
                <div className="settingsWrapper">
                    <div className="settingsTitle">
                        <span className="settingsUpdateTitle">Update Account</span>
                        <span className="settingsDeleteTitle">Delete Account</span>
                    </div>
                    <form action="" className="settingsForm">
                        <label>Foto do Perfil</label>
                        <div className="settingsPP">
                            <img src="/images/daniel-profile.jpeg" alt="" />
                            <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                            </label>
                            <input type="file" name="" id="fileInput" style={{display:'none'}}/>
                        </div>
                        <label>Username</label>
                        <input type="text" placeholder='Daniel' />
                        <label>Email</label>
                        <input type="email" placeholder='daniel@pl.co.uk' />
                        <label>Password</label>
                        <input type="password" />
                        <button className="settingsSubmit">
                            Update
                        </button>
                    </form>
                </div>
                    <Sidebar />
            </div>
    )
}

export default Settings
