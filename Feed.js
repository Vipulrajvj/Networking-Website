import React from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import InputOption from './InputOption';
import Post from './Post';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalenderViewIcon from '@material-ui/icons/Assignment';





//Step 15 we use form because when we enter something there should be something that we get

function Feed() {
    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                <CreateIcon/>
                <form >
                    <input type="text"/>
                    <button type="submit"> Submit </button>
                </form>
                </div>

               <div className="feed_inputOptions">
                   <InputOption Icon = {ImageIcon} title = 'Photo' color = "#7085F9"/>
                   <InputOption Icon = {SubscriptionIcon} title = 'Video' color = "#7085F9"/>
                   <InputOption Icon = {EventNoteIcon} title = 'Event' color = "#7085F9"/>
                   <InputOption Icon = {CalenderViewIcon} title = 'Write article' color = "#7085F9"/>

               </div>

            </div>

            {/* Posts */}
            <Post name = 'Vipul Raj' description = 'This is a test' message = 'This worked'/>

        </div>
    )
}

export default Feed
