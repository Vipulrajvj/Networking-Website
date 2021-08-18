import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import Back from "./images/photoholgic-wZTiKB6rQYY-unsplash.jpg" 
// give classname to components early so that they can be used in the css files


//Step 14create a recentItem , pass Topic through it and then print after recetnt

function Sidebar() {

    const recentItem = (topic) =>(
        <div className="sidebar_recentitem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
           <div className="sidebar_top">
                <img src={Back} alt="" className="name" /> 
                <Avatar className = "sidebar_avatar"/>
                <h2>Vipul Raj</h2>
                <h4>Programmer</h4>
           </div>

           <div className="sibebar_stats">
  


           <div className="sidebar_stat">
               <p>who viewed your story</p>
               <p className ="stat_number">2000</p>
            </div>

            <div className="sidebar_stat">
                <p>who viewed your story</p>
               <p className ="stat_number">2000</p>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('reactJs')}
                {recentItem('Programming')}
                {recentItem('Software')}

            </div>
           </div>

        </div>
    )
}

export default Sidebar
