import React from 'react'
//Then import the css file for it
import './HeaderOption.css'


//Step 9 putting parameters in header options which can be used when passed in header.js
//Step 11 the line Icon && works like an if statement if an icon is passed then what wioll happen is written in side the code 
//Step 12 importing from material ui core for the profile picture
import {Avatar} from '@material-ui/core' 

function HeaderOption({avatar, Icon , title}) {
    return (
        <div className = 'HeaderOption'>
            {Icon && <Icon className = 'HeaderOption_icon'/>}
            {/* using jsx element title because we are passing it as a javascript parameter, in this case if an icon is passed as a parameter what happens then is shown isidde it */}
            {avatar && (
                    <Avatar className = 'HeaderOption_icon' src = {avatar}/>
                )
            }
            <h3>{title}</h3>
        </div>
    )
}

export default HeaderOption
