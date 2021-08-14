//step 4 use rfce extension to get the default function header , download the extension feom vs code 

import React from 'react'


// Step 5 import css file for the header here 
//Step 6 get in settings on how to integrate emmet in javascript   
//Step 7 to import images use import name of the file then the address of the file, then use {img1} wherever u need to use it   

import img1 from './images/Verna.png'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className = "header">
            <div className="header_left">
            <img src={img1} alt=""/> 
            <div className="header_search">
            <SearchIcon/>
            <input type="text" name="" id="" />
            </div>   
            
            
            </div>
            <div className="header_right"></div>
            
            


        </div>
    )
}

export default Header
