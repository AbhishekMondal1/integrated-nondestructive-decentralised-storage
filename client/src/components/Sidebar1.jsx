import React, { useRef } from 'react';
import {Link,NavLink, Route} from 'react-router-dom'
import './Sidebar.css';
import profile from '../icon.png';
const Sidebar1 = () => {
    let sidebarRef = useRef('')

    return (
        <div>
            <div className="sidebar" ref={sidebarRef}>
                <div className="logo_content">
                    <div className="logo">
                        <i className='bx bxl-bitcoin'></i>
                        <div className="separator"></div>
                        <div className="logo_name">INDS</div>
                    </div>
                    <i className='bx bx-menu' id="btn" onClick={()=>{
                    sidebarRef.current.classList.toggle("active");
                    }}>{/*<i class='bx bx-left-arrow-alt' id="btn1"></i>*/}</i>
                </div>
                <ul className="nav_list">
                    <li>
                            <i className='bx bx-search' ></i>
                            <input type="text" placeholder="Search"/>
                            <span className="tooltip">Search</span>
                    </li>
                    <li>
                        <NavLink activeClassName="active2" exact to="/">
                            <i class='bx bx-home'></i>
                            <span className="link_name">Home</span>
                            <span className="tooltip">Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active2" to="/share">
                            <i class='bx bx-cloud-upload' ></i>
                            <span className="link_name">Share</span>
                            <span className="tooltip">Share</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active2" to="/filestable">
                            <i class='bx bx-list-ul' ></i>
                            <span className="link_name">List View</span>
                            <span className="tooltip">List View</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active2" to="/filesgrid">
                            <i class='bx bxs-grid-alt' ></i>
                            <span className="link_name">Grid View</span>
                            <span className="tooltip">Grid View</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active2" to="/fl">
                            <i className='bx bx-cog' ></i>
                            <span className="link_name">Settings</span>
                            <span className="tooltip">Settings</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active2" to="/f2">
                            <i className='bx bxs-palette bx-flip-vertical' ></i>
                            <span className="link_name">Background</span>
                            <span className="tooltip">Background</span>
                        </NavLink>
                    </li>
                </ul>
                <div className="profile_content">
                    <div className="profile">
                        <div className="profile_details">
                            <img src={profile} alt="" srcset=""/>
                            <div className="name_job">
                                <div className="name">Abhi</div>
                                <div className="job">Dapp Developer</div>
                            </div>
                        </div>
                        <i className='bx bxs-log-out' id='log_out' ></i>
                    </div>
                </div>
            </div>
            {/*<div className="home_content">
                <div className="text">Home</div>
            </div>*/}
        </div>
    )
}

export default Sidebar1;
