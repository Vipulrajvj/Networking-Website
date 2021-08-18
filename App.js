import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed'

//use "emmet.syntaxProfiles": {
  // "javascript": "jsx"} in json settings for emmet autocomplete



// step 1 delete everything in App() when starting from start header to end header
//Step 3 create JS files for header sidebars get in the flowstate 
//Step 6 after creating header , render here


function App() {
  return (
    <div className="app">
      {/* Header of the Page */}
      <Header/>   
      {/* importing the header componenet here */}

      {/* App Body */}
      {/* App body has multiple parts so use flex 0.2 and more divisions to divide the Page into different parts */}
      <div className="app_body">
      <Sidebar/>
      <Feed/>
      </div>
      
      
      

      </div>
  );
}

export default App;
